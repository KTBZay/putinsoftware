const mysql = require('mysql')
const BDU = {}
BDU.UpLoadData = (data,cfx) => {
    let SQL = mysql.createConnection({
        host: cfx.MySQLSettings.Host,
        user: cfx.MySQLSettings.User,
        password: cfx.MySQLSettings.pwd,
        database: cfx.MySQLSettings.database
    })
    SQL.connect(function (err) {
        console.log(err)
    })
    try {
    SQL.query(data, (err,result)=>{
        console.log(err)
        })
    } catch (error) {
        console.log('[PutinJS-SQL]: Sql is throwing errors, we have patched them up and will let the bot run')
    }
    
}
module.exports = {
    BDU
}