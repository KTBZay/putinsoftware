const SlashCreator = (appid,publicid,token,port,host) => {
    const { SlashCreator, FastifyServer } = require('slash-create');
    const {Client} = require('discord.js');
    const bot = new Client({
        intents: ['GUILDS', 'GUILD_MESSAGES']
    })
    const path = require('path');
    const creator = new SlashCreator({
        applicationID: appid,
        publicKey: publicid,
        serverPort: port,
        serverHost: host,
        token: token
    })

    creator
     .withServer(new FastifyServer())
     .registerCommandsIn(path.join(__dirname, 'commands'))
     .startServer();

        bot.login(token)
    }
module.exports = {
    SlashCreator
}