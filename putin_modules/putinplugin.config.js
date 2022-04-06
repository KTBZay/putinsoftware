try {
    const { StartUpProcess } = require("./putin.processes");
    StartUpProcess()
    const { ClientCreator } = require("./Client/ClientCreator/ClientCreator");
    const { SlashCreator } = require("./Client/SlashCreator/SlashCreator");
    module.exports = {
        BotCreator: {
            Slash: SlashCreator,
            Normal: ClientCreator
        }
    }
} catch (error) {
    console.error('There was a missing file please reinstall putin.js')
}