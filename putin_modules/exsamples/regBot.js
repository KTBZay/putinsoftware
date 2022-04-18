const {Client} = require('discord.js');
const bot = new Client({
    intents:['GUILD_MESSAGES']
})
bot.on('ready',()=>{
    console.log('hello')
})
bot.login('token-here')