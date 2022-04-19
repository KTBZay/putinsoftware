const { reply } = require("./functions/server.reply")
const createConnection = ({
    host
}) => {
    if(host === '192.0.0.1'){
        reply(`[ES]: Handshake made with ISP-Public`,{isErr: false})
    }else if(host != `192.0.0.1`){
        reply('[ES]: Handshake failed',{isErr: true})
    }
}
const createAdminConnection = ({
    host
}) => {
    if(host === '192.0.0.6'){
        reply(`[ES]: Handshake made with ISP-Admin`,{isErr: false})
    }else if(host != `192.0.0.6`){
        reply('[ES]: Handshake failed',{isErr: true})
    }
}
module.exports = {
    createConnection,
    createAdminConnection
}
