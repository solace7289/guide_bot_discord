
const link = "https://media.tenor.com/Pw1fmWcVxNkAAAAe/nah-id-win-gojo.png";
const link1 = "https://tenor.com/view/rigby-cat-rigby-pee-funny-cat-gif-436236211739437212";

const { SlashCommandBuilder } = require('discord.js');

const nah = new SlashCommandBuilder()
  .setName('nah')
  .setDescription('nah');

module.exports = {
  data: nah,
  async execute(interaction) {
    await interaction.reply(link1);
  },
};




