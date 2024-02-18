import { Router } from 'itty-router';
import { REST } from '@discordjs/rest';
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from 'discord-interactions';
import { ENABLE_CHANNEL_COMMAND, MESSAGES_COMMAND } from './commands.js';
import { InteractionResponseFlags } from 'discord-interactions';
import { D1Orm, DataTypes, Model } from 'd1-orm';
import { API } from "./@discordjs/core/http-only.mjs";

class JsonResponse extends Response {
  constructor(body: any, init?: any) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}

export interface Env {
  DB: D1Database;
  DISCORD_APPLICATION_ID: number;
  DISCORD_TOKEN: string
}

export class Shared {
  orm
  Users
  LastReads
  rest
  api

  constructor(env: Env) {
    this.orm = new D1Orm(env.DB)
    this.Users = new Model({
      D1Orm: this.orm,
      tableName: "Users",
      primaryKeys: "UserId",
    }, {
      UserId: {
        type: DataTypes.STRING,
        notNull: true
      },
      MessageAmount: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 0
      }
    })
    this.LastReads = new Model({
      D1Orm: this.orm,
      tableName: "LastReads",
      primaryKeys: "ChannelId"
    }, {
      ChannelId: {
        type: DataTypes.STRING,
        notNull: true
      },
      LastMessageId: {
        type: DataTypes.STRING,
        notNull: true,
      },
      Locked: {
        type: DataTypes.BOOLEAN,
        notNull: true,
        defaultValue: 0
      }
    })
    this.rest = new REST({ version: '10' }).setToken(env.DISCORD_TOKEN);
    this.api = new API(this.rest);
  }
  async getMessagesAfter(channel: string, id: string) {
    const pageSize = 50
    let totalMessages: { [id: string]: number } = {}
    let messages;
    let lastId = id
    do {
      messages = await this.api.channels.getMessages(channel, {
        limit: pageSize,
        after: lastId,
      })
      if (messages.length === 0) continue;
      for (let message of messages) {
        if (message.author.bot) continue;
        totalMessages[message.author.id] = (totalMessages[message.author.id] || 0) + 1
      }
      lastId = messages[0].id
    } while (messages.length >= pageSize)
    return { totalMessages, lastId }
  }

  async incrementUserMessageAmount(userID: string, increment: number) {
    let userQuery = { where: { UserId: userID } }
    let user = await this.Users.First(userQuery);
    if (!user) {
      await this.Users.InsertOne({
        UserId: userID
      });
      user = await this.Users.First(userQuery);
    }
    let newMessageAmount = (user?.MessageAmount || 0) + increment
    await this.Users.Update({ where: { UserId: userID }, data: { MessageAmount: newMessageAmount } });
    return newMessageAmount
  }

  async updateUsersForChannel(channel: string) {
    const lastRead = await this.LastReads.First({ where: { ChannelId: channel, Locked: 0 } })
    if (!lastRead) return;
    await this.LastReads.Update({ where: { ChannelId: channel }, data: { Locked: 1 } })
    const { totalMessages, lastId } = await this.getMessagesAfter(channel, lastRead.LastMessageId);
    let promises: Promise<unknown>[] = []
    for (const [userID, MessageAmount] of Object.entries(totalMessages)) {
      promises.push(this.incrementUserMessageAmount(userID, MessageAmount))
    }
    if (lastId !== lastRead.ChannelId) {
      promises.push(this.LastReads.Update({ where: { ChannelId: channel }, data: { LastMessageId: lastId } }))
    }
    await Promise.all(promises)
    await this.LastReads.Update({ where: { ChannelId: channel }, data: { Locked: 0 } })
  }

  async listUsers() {
    let all = await this.Users.All({});
    return all.results
  }

  async getUserFromId(userID: string) {
    return (await this.api.users.get(userID))
  }
}


const router = Router();

router.get('/', (_, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID}`);
});

router.post('/', async (request, env: Env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env,
  );
  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 });
  }

  if (interaction.type === InteractionType.PING) {
    return new JsonResponse({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {


    const interactionUserID = interaction.member.user.id as string;
    const interactionChannelID = interaction.channel.id as string;
    const shared = new Shared(env)
    await shared.updateUsersForChannel(interactionChannelID)

    switch (interaction.data.name.toLowerCase()) {
      case ENABLE_CHANNEL_COMMAND.name.toLowerCase(): {
        const query = { where: { ChannelId: interactionChannelID } };
        const channelRead = await shared.LastReads.First(query)
        if (channelRead) {
          await shared.LastReads.Delete(query)
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: "Current channel has been disabled",
            },
          });
        }
        let lastMessage
        try {
          lastMessage = await shared.api.channels.getMessages(interactionChannelID, {
            limit: 1
          })
        } catch (err) {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: String(err).slice(0, 500),
            },
          });
        }

        let message = lastMessage[0]
        if (!message) {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: "Please send this command again, at least one message was needed in the channel to enable it",
            },
          });
        }
        let id = message.id;
        await shared.LastReads.InsertOne({ ChannelId: interactionChannelID, LastMessageId: id, Locked: 0 })
        let content = `Inserted channel ${interactionChannelID} with last read ${id}`;
        return new JsonResponse({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content,
          },
        });
      }

      case MESSAGES_COMMAND.name.toLowerCase(): {
        const users = await shared.listUsers()
        let content = "Message count:\n";
        for (const user of users) {
          let userData = await shared.getUserFromId(user.UserId);
          content += `${userData.username} has ${user.MessageAmount} messages\n`
        }
        return new JsonResponse({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content,
          },
        });
      }

      default:
        return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
    }
  }

  console.error('Unknown Type');
  return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});

router.get("/api/list-users", async (_, env: Env) => {
  const shared = new Shared(env)
  const users = await shared.listUsers()
  return new Response(JSON.stringify(users))
})


router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request: any, env: any) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const body = await request.text();
  const isValidRequest =
    signature &&
    timestamp &&
    verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY);
  if (!isValidRequest) {
    return { isValid: false };
  }

  return { interaction: JSON.parse(body), isValid: true };
}

const server = {
  verifyDiscordRequest: verifyDiscordRequest,
  fetch: async function (request: any, env: any) {
    return router.handle(request, env);
  },
};

export default server;
