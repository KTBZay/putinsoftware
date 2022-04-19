const client = require('../client.json');
const putin = require('../putin.json');
const { createConnection, createAdminConnection } = require('./NetworkHook/server.CreateConnection');
const { ECHO } = require('./psjs/psFiles/app');
const Processer = [];


function StartUpProcess() {
    const Processes = {
        Client:{
            Name: client.ProcessName,
            Version: client.Version
        },
        Putin: {
            Name: putin.ProcessName,
            Version: putin.Version
        },
        PS:{
            Name: ECHO.get.profile.name,
            Version: ECHO.get.profile.version
        }
    };
    createConnection({host: '192.0.0.1'})
    createAdminConnection({host: '192.0.0.6'})
    Processer.push(Processes);
    console.log(Processer)
}
module.exports = {
    StartUpProcess,
    Processer
}