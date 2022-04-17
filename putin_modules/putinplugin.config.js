try {
    const { DataType, Host } = require("./System/functions");
    const { Server } = require("./Server/app")
    const { StartUpProcess } = require("./putin.processes");
    StartUpProcess()
    const { PutinClient } = require("./Client/ClientCreator/ClientCreator");
    const { SlashCreator } = require("./Client/SlashCreator/SlashCreator");
    module.exports = {
        BotCreator: {
            Slash: SlashCreator,
            Normalbot: PutinClient,
            P: {DataType, Host}
        }
    }
} catch (error) {
    console.error('There was a missing file please reinstall putin.js')
}