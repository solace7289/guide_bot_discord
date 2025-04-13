
// link meme: https://i.kym-cdn.com/entries/icons/facebook/000/050/187/4541e987-5d55-421f-968d-04f99fb6a68c-1702995843784.jpg

const link = "https://i.kym-cdn.com/entries/icons/facebook/000/050/187/4541e987-5d55-421f-968d-04f99fb6a68c-1702995843784.jpg";

const { SlashCommandBuilder } = require('discord.js');

const shrek = new SlashCommandBuilder()
  .setName('shrek')
  .setDescription('shrek meme');
module.exports = {
  data: shrek,
  async execute(interaction) {
    await interaction.reply(link);
  },
};

