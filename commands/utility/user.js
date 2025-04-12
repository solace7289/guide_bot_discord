//require slashCommandBuilder from discord.js
const { SlashCommandBuilder } = require('discord.js');

// slash commands to show user information
const userInforCommand = new SlashCommandBuilder()
  .setName('sofl')
  .setDescription('Get user information');

module.exports = {
  data: userInforCommand,
  async execute(interaction) {
    await interaction.reply(`This command is run by ${interaction.user.username}, who join at ${interaction.member.joinedAt} `);
  },
};


