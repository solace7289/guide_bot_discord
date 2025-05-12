// require 
const { SlashCommandBuilder } = require('discord.js');
const { evaluate } = require('mathjs');

const calckc = new SlashCommandBuilder()
  .setName('calckc')
  .setDescription('Caculate ')
  .addStringOption(option => 
    option.setName('input')
          .setDescription('ed need and rate kc')
  )

// calculate number ED need 
const calculate = (edneed, rate) => {
  const cal = (edneed/100) * rate * 1000000;
  return cal; 
}

// validate and split string 
const validateString = (inputString) => {
  // use regex to validate inputed string 
  const regex = /^[1-9][0-9]{1,}:[1-9][0-9]$/

  //check if not match 
  if (!inputString.trim().match(regex) ) {
    // return false
    return false
  } else {
    return true
  }
}

// split string 
const handleString = (inputString) => {
  // first: validate input string, if true then split it
  if (validateString(inputString) ) {
    //split: to get edneed and rate 
    const [ edneed, ratekc ] = inputString.trim().split(':') 
    
    return calculate(edneed, ratekc)

  }

}

module.exports = {
  data: calckc,
  async execute(interaction) {
    // get string input 
    const inputString = interaction.options.getString('input');
    
    if (validateString(inputString) ) {
      const result = handleString(inputString).toLocaleString();
      // log input 
      await interaction.reply(`Input: ${inputString} | Result: ${result}`);
    } else {
      await interaction.reply(`Chuỗi nhập vào không hợp lệ! Hãy thử lại (VD: 4000:15 hoặc 3900:13)!`)
    }
  },
};








