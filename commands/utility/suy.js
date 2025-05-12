

const link = "https://cdn.discordapp.com/attachments/1218798034373185637/1369753094837239848/suy_lv2.jpg?ex=681d017a&is=681baffa&hm=d6b59a4fc1e4662b4b4dfc2587a5bb606249054b5471fe9f7022ec48afac7bca&"

const { SlashCommandBuilder } = require('discord.js');

const suy = new SlashCommandBuilder()
  .setName('suy')
  .setDescription('suy_lv2');
module.exports = {
  data: suy,
  async execute(interaction) {
    await interaction.reply(link);
  },
};

