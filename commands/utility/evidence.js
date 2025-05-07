
const linke = "https://media.discordapp.net/attachments/1188526594655002747/1369324524914610267/image-6.png?ex=681cc3d7&is=681b7257&hm=f45582eceb6ff7e5147e08710630959d3ce997a9859d03f1fb92a02bdb67b6c7&=&format=webp&quality=lossless"

const { SlashCommandBuilder } = require('discord.js');

const evidence = new SlashCommandBuilder()
  .setName('evidence')
  .setDescription('evidence');

module.exports = {
  data: evidence,
  async execute(interaction) {
    await interaction.reply(linke);
  },
};




