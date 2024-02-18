import { ENABLE_CHANNEL_COMMAND, MESSAGES_COMMAND } from './commands.js';
import dotenv from 'dotenv';
import process from 'node:process';

// load .dev.vars and exec arguments
const args = process.argv.slice(2);
console.log(args[0] ? `detected argument: ${args}` : 'no args detected');
dotenv.config({ path: '.dev.vars' });

// assign correct variables according to exec argument
let token = '';
let applicationId = '';
switch (args[0]) {
  // case: "node src/register.js production" get prod env vars
  case 'production':
    console.log('loading production vars,,,');
    token = process.env.PROD_DISCORD_TOKEN;
    applicationId = process.env.PROD_DISCORD_APPLICATION_ID;
    break;
  // case: "node src/register.js staging" get stg env vars
  case 'staging':
    console.log('loading staging vars,,,');
    token = process.env.STG_DISCORD_TOKEN;
    applicationId = process.env.STG_DISCORD_APPLICATION_ID;
    break;
  // case: "node src/register.js" get secrets from .env.vars
  default:
    console.log('loading .dev.vars vars,,,');
    token = process.env.DISCORD_TOKEN;
    applicationId = process.env.DISCORD_APPLICATION_ID;
    break;
}

// catch empty vars and throw an error
if (!token) {
  throw new Error('The DISCORD_TOKEN environment variable is required.');
}
if (!applicationId) {
  throw new Error(
    'The DISCORD_APPLICATION_ID environment variable is required.',
  );
}

// constants
const url_api = `https://discord.com/api/v10/applications/${applicationId}`;
const url = url_api + `/commands`;
const commands = JSON.stringify([MESSAGES_COMMAND, ENABLE_CHANNEL_COMMAND]);

/**
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */

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
