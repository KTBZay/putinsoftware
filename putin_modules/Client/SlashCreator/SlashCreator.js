const SlashCreator = async (name,cfx,botid) => {
    const path = require('path')
    const {Client} = require('discord.js');
    const {SlashCreator, GatewayServer} = require('slash-create');
    const bot = new Client({
        intents: ['GUILD_MESSAGES', 'GUILDS']
    })
    const creator = new SlashCreator({
        applicationID: botid,
        token: cfx.BotSettings.token,
     })
    bot.on('ready', ()=>{
        console.log(`${name} has started with slashcmds`);
        bot.user.setActivity(`${name} was created by PutinJS`)
    })
    creator
        .withServer(
            new GatewayServer((handler)=>bot.ws.on('INTERACTION_CREATE', handler))
        )
        .registerCommandsIn(path.join(__dirname, 'commands'))
    bot.login(cfx.BotSettings.token)
}
module.exports = {
    SlashCreator
}