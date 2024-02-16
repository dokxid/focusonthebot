/* eslint-disable no-unused-vars */
import { AWW_COMMAND, INVITE_COMMAND, MESSAGES_COMMAND } from './commands.js';
import dotenv from 'dotenv';
import process from 'node:process';

// get secrets from .env
dotenv.config({ path: '.dev.vars' });
const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.DISCORD_APPLICATION_ID;
const postmanUrl = process.env.POSTMAN_MOCK_API;
const guildId = process.env.DISCORD_GUILD_ID;

if (!token) {
  throw new Error('The DISCORD_TOKEN environment variable is required.');
}
if (!applicationId) {
  throw new Error(
    'The DISCORD_APPLICATION_ID environment variable is required.',
  );
}

const commands = JSON.stringify([
  AWW_COMMAND,
  INVITE_COMMAND,
  MESSAGES_COMMAND,
]);

/**
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
const url_api = `https://discord.com/api/v10/applications/${applicationId}`;
const url = url_api + `/commands`;
const url_postman = `${postmanUrl}/commands`;

const response = await fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${token}`,
  },
  method: 'PUT',
  body: commands,
});

if (response.ok) {
  console.log('Registered all commands');
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
} else {
  console.error('Error registering commands');
  let errorText = `Error registering commands \n ${response.url}: ${response.status} ${response.statusText}`;
  try {
    const error = await response.text();
    if (error) {
      errorText = `${errorText} \n\n ${error}`;
    }
  } catch (err) {
    console.error('Error reading body from request:', err);
  }
  console.error(errorText);
}
