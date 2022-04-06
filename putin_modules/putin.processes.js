const Processer = [];
const client = require('../client.json');
const putin = require('../putin.json');

function StartUpProcess() {
    const Processes = {
        Client:{
            Name: client.ProcessName,
            Version: client.Version
        },
        Putin: {
            Name: putin.ProcessName,
            Version: putin.Version
        }
    };
    Processer.push(Processes);
    console.log(Processer)
}
module.exports = {
    StartUpProcess
}