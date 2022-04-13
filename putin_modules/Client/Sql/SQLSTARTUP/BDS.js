const mysql = require('mysql')
const BDS = {}
/**
 * 
 * @param {name} name Specifies the database name 
 */

const StartSqlConnection = (cfx) => {
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
StartSqlConnection.query = (data,msg,cfx) => {
    let SQL = mysql.createConnection({
        host: cfx.MySQLSettings.Host,
        user: cfx.MySQLSettings.User,
        password: cfx.MySQLSettings.pwd,
        database: cfx.MySQLSettings.database
    })
    SQL.connect(function (err) {
        console.log(err)
    }),
    SQL.query(data, function (err,result,fields) {
        if (err) throw err;
            console.log(result);
           
          })
    
}
StartSqlConnection;

module.exports = {
    StartSqlConnection
}