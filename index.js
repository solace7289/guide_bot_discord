
// require discord.js 
const { Client, Events, GatewayIntentBits } = require('discord.js');

// import token from config.json 
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds]});

//
client.once(Events.ClientReady, readyClient => {
  console.log(`Running ... `);
  console.log(`Logged in as: ${readyClient.user.tag}`);
});

// login to server 
client.login(token);












