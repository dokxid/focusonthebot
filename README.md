# focusonthebot



## Resources used

- [Discord Interactions API](https://discord.com/developers/docs/interactions/receiving-and-responding) for the discord api
- [Cloudflare Workers](https://workers.cloudflare.com/) for hosting
- [Discord Cloudfare Sample App](https://github.com/discord/cloudflare-sample-app) for the template

## prerequisites

> note: ⚙️ The dependencies in this project require at least v18 of [Node.js](https://nodejs.org/en/)

### create a discord bot

Before starting, you'll need to create a [discord app](https://discord.com/developers/applications) with the following permissions:

- `bot` with the `Send Messages` and `Use Slash Command` permissions
- `Read Messages`, `Send Messages` and **`View Message History`** permissions for the channels that are going to be enabled
- `applications.commands` scope
- Message Content Intent (added on bot app settings)

> ⚙️ Permissions can be configured by clicking on the `OAuth2` tab and using the `URL Generator`. After a URL is generated, you can install the app by pasting that URL into your browser and following the installation flow.

### creating your cloudflare worker

Next, you'll need to create a Cloudflare Worker.

- Visit the [Cloudflare dashboard](https://dash.cloudflare.com/)
- Click on the `Workers` tab, and create a new service using the same name as your Discord bot

## Running locally

### setup environment

```sh
git clone https://github.com/dokxid/focusonthebot.git
cd focusonthebot
yarn install
```

### setup d1

```sh
yarn exec wrangler login
yarn exec wrangler d1 create <your-desired-db-name>
yarn exec wrangler d1 execute <your-desired-db-name> --file=./schema.sql
```

### configure for local development

copy `example.dev.vars` to `.dev.vars`, and make sure to set each variable:

```
cp example.dev.vars .dev.vars
```

copy `wrangler.local.toml.example` to `wrangler.local.toml`, and make sure to set each variable:

```
cp wrangler.local.toml.example wrangler.local.toml
```

> **IMPORTANT NOTE: `.dev.vars` and `wrangler.local.toml` MAY contain sensitive data so make sure it does not get checked into git**.

### register slash commands

the following command only needs to be run once:

```sh
yarn exec run register
```

### OPTIONAL: setting up ngrok

When a user types a slash command, Discord will send an HTTP request to a given endpoint. During local development this can be a little challenging, so we're going to use a tool called `ngrok` to create an HTTP tunnel.

```
$ npm run ngrok
```

![forwarding](https://user-images.githubusercontent.com/534619/157511497-19c8cef7-c349-40ec-a9d3-4bc0147909b0.png)

This is going to bounce requests off of an external endpoint, and forward them to your machine. Copy the HTTPS link provided by the tool. It should look something like `https://8098-24-22-245-250.ngrok.io`. Now head back to the Discord Developer Dashboard, and update the "Interactions Endpoint URL" for your bot:

![interactions-endpoint](https://user-images.githubusercontent.com/534619/157510959-6cf0327a-052a-432c-855b-c662824f15ce.png)

This is the process we'll use for local testing and development. When you've published your bot to Cloudflare, you will _want to update this field to use your Cloudflare Worker URL._

### run app locally

Now you should be ready to start your server:

```sh
yarn run dev
```

## deploying

### about deploying

This repository is set up to automatically deploy to Cloudflare Workers when new changes land on the `main` branch. To deploy manually, run `npm run publish`, which uses the `wrangler publish` command under the hood. Publishing via a GitHub Action requires obtaining an [API Token and your Account ID from Cloudflare](https://developers.cloudflare.com/workers/wrangler/cli-wrangler/authentication/#generate-tokens). These are stored [as secrets in the GitHub repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), making them available to GitHub Actions. The following configuration in `.github/workflows/ci.yaml` demonstrates how to tie it all together:

### storing secrets (cicd)

the credentials in `.dev.vars` are only applied locally. the deploy service needs access to credentials from your app:

- go into the the repository of this / your fork
- go to settings
- go to security -> secrets and variables
- go to actions
- put in following variables
 - CF_ACCOUNT_ID
 - CF_API_TOKEN
 - PROD_DISCORD_APPLICATION_ID
 - PROD_DISCORD_TOKEN
 - STG_DISCORD_APPLICATION_ID
 - STG_DISCORD_TOKEN

### storing secrets (manually)

> note: deprecated

the credentials in `.dev.vars` are only applied locally. the deploy service needs access to credentials from your app:

```
$ wrangler secret put DISCORD_TOKEN
$ wrangler secret put DISCORD_PUBLIC_KEY
$ wrangler secret put DISCORD_APPLICATION_ID
```
