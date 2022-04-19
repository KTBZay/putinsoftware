const { PutinClient } = require("./putin_modules/Client/ClientCreator/ClientCreator")
const { SlashCreator } = require("./putin_modules/Client/SlashCreator/SlashCreator")
const { ECHO } = require("./putin_modules/psjs/psFiles/app")
const { BotCreator } = require("./putin_modules/putinplugin.config")

const ZayBotConfig = {
    BotSettings: {
        token: 'OTYwMjMxNDk2NjAwNDA0MDE4.YknbRQ.eeVLeR0UWDBFz8gfhrDybJnqkHQ',
        prefix: '#',
        IsSqlEnabled: true,
        ApplicationID: '932005989350248468',
        Activity: 'Prefix is # | ZaySideKick',
        ReadyMSG: 'I have started'
    },
    MySQLSettings: {
        Host: 'localhost',
        User: 'root',
        pwd: '',
        database: 'putinjs'
    }
}
const ZaySlashBotConfig = {
    BotSettings: {
        token: 'OTY1MzY1ODQ0MzgzMjQ0Mjg5.YlyJAA.mI0CAQHXfzj1yxZrx7pyAruS1jY',
        Activity: 'Helping in servers everyday | Avatar made by chica15#5419',
        prefix: '+',
        ReadyMSG: 'I have started',
        Appid: '965365844383244289',
        PublicID: 'b16e054b9d8b68383f6793e4a5261a4c5be1d595d54e17a76bb72539f3367d17',
        host: '0.0.0.0',
        port: 10 || 8020
    }
    ,
    MySQLSettings: {
        Host: 'localhost',
        User: 'root',
        pwd: '',
        database: 'putinjs'
    }
}
PutinClient({name: 'ZayBot', cfx: ZayBotConfig});
SlashCreator(ZaySlashBotConfig.BotSettings.Appid,ZaySlashBotConfig.BotSettings.PublicID, ZaySlashBotConfig.BotSettings.token,ZaySlashBotConfig.BotSettings.port,ZaySlashBotConfig.BotSettings.host);

