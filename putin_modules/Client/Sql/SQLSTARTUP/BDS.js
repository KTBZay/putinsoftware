const mysql = require('mysql')
const BDS = {}
/**
 * 
 * @param {name} name Specifies the database name 
 */
BDS.StartSqlConnection = (cfx) => {
    let SQL = mysql.createConnection({
        host: cfx.MySQLSettings.Host,
        user: cfx.MySQLSettings.User,
        password: cfx.MySQLSettings.pwd,
        database: cfx.MySQLSettings.database
    })
    SQL.connect(function (err) {
        console.log(err)
    })
};
module.exports = {
    BDS
}