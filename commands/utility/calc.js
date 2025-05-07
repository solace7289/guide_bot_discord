// require 
const { SlashCommandBuilder } = require('discord.js');
const { evaluate } = require('mathjs');

const calc = new SlashCommandBuilder()
  .setName('calc')
  .setDescription('Caculate ')
  .addStringOption(option => 
    option.setName('input')
          .setDescription('Calculation ')
  );

const convertExpression = (input) => {
  const unitMap = {
    k: '*1000',
    m: '*1000000',
    b: '*1000000000'
  };
  // Bước 1: Thêm dấu cách trước các toán tử để dễ xử lý
  const spaced = input.replace(/([+\-*/()])/g, ' $1 ');

  // Bước 2: Tách từng phần
  const tokens = spaced.trim().split(/\s+/).map(token => {
    // Nếu token là số có đơn vị
    const match = token.match(/^(\d+(?:\.\d+)?)([kmb])$/i);
    if (match) {
      const [_, number, unit] = match;
      return `${number} ${unitMap[unit.toLowerCase()]}`;
    }

    // Giữ nguyên toán tử hoặc số không có đơn vị
    return token;
  });

  return tokens.join(' ');
}

const calculate = (inputString) => {
  const convertString = convertExpression(inputString);
  console.log(`Convert string: ${convertString} `);

  return evaluate(convertString); 
}

module.exports = {
  data: calc,
  async execute(interaction) {
    // get string input 
    const input = interaction.options.getString('input');
    const result = calculate(input).toLocaleString();
    ;

    await interaction.reply(`Input: ${input} | Result: ${result}`);
  },
};








