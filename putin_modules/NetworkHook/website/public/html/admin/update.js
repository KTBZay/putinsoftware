export function OPERATIONAL_UPDATE(name, callback) {
    this.name = name;
    this.callback = callback;

    const errs = {
        _system_failure: new Error('SERVER_ERROR: SYSTEM_FAILURE, PLEASE CONTACT SUPPORT'),
        _server_outage: new Error('SERVER_OUTAGE: checkout the status section for more information')
    }
    
    if (!name && !callback) {
        throw errs._system_failure
    } else if (name && callback) {
        const newUpdate = [];
        const update = { name: name, callback: callback };
        newUpdate.push(update)
    }
}