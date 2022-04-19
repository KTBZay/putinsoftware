try {
    const { StartUpProcess } = require("./putin.processes");
    StartUpProcess()
    const { PutinClient } = require("./Client/ClientCreator/ClientCreator");
    const { SlashCreator } = require("./Client/SlashCreator/SlashCreator");
} catch (error) {
    console.error('There was a missing file please reinstall putin.js')
}