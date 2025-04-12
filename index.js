
// require discord.js
const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');

// import token from config.json 
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds]});

// new command collection
client.commands = new Collection();

//
client.once(Events.ClientReady, readyClient => {
  console.log(`Running ... `);
  console.log(`Logged in as: ${readyClient.user.tag}`);
});

// open and read all file in commands folder
// get path of commands folder
const folderPath = path.join(__dirname, "commands");

// read folder commands
const commandFolder = fs.readdirSync(folderPath);

// continue to read each files in each folders inside commands folder
for (const folder of commandFolder) {
  // get path of sub-folder
  const commandPath = path.join(folderPath, folder);

  // read content inside folder 
  const commandFiles = fs.readdirSync(commandPath).filter(f => f.endsWith('.js'));

  // for each file command js inside sub-folder, read its content and put into commands collection
  for(const file of commandFiles) {
    // get path of command file 
    const filePath = path.join(commandPath, file);

    // read content 
    const command = require(filePath);

    //check content of each file
    if( 'data' in command && 'execute' in command ) {
      // if have right content then set it into collection 
      client.commands.set(command.data.name, command);
      
      //log
      console.log(`New command have been set: /${command.data.name}`);
    } else {
      // if have error then log into screen
      console.log(`command at file ${command} is missing data or execute!`);
    }
  }
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});

// login to server 
client.login(token);












