const Processer = [];
const client = require('../client.json');
const putin = require('../putin.json');
const { ECHO } = require('./psjs/psFiles/app');
const server = require('../server.json');
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
        Server:{
            Name: server.ProcessName,
            Version: server.Version,
            Inactive: 'true'
        },
        PS:{
            Name: ECHO.get.profile.name,
            Version: ECHO.get.profile.version
        }
    };
    Processer.push(Processes);
    console.log(Processer)
}
module.exports = {
    StartUpProcess
}