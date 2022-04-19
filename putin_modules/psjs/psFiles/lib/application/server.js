const { ECHO } = require("../../app");
const NewApplication = async (name,root, db, {host, user , password }) => {
    console.log(`[E]: Creating application, you may need mysql to run interact with this function`)
    setTimeout(() => {
        const mysql = require('mysql');
        const conn = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: db
        })
        conn.connect((err)=>{
            if(err) throw err;
            console.log('[E]: SQL connected')
        })
        const fs = require('fs');
        setTimeout(() => {
            const systemCreatetable = `CREATE TABLE SystemData(name VARCHAR (255), root VARCHAR (255), host VARCHAR (255), user VARCHAR (255), password VARCHAR (255))`
            conn.query(systemCreatetable, (err)=>{
                if(err) throw err;
                console.log(`[E]: Creating systemdata`)
            })
            setTimeout(() => {
                const SystemData = `INSERT INTO SystemData(name,root,host,user,password) VALUES ('${name}', '${root}', '${host}', '${user}', '${password}')`;
                conn.query(SystemData, (err)=>{
                    if(err) throw err;
                    console.log(`[E]: Inserted data in to system table`)
                })
                if(!fs.existsSync(root)){
                    fs.mkdirSync(root, {recursive: true})
                }
                fs.writeFileSync(`${root}/SQLprofile.pjs`, `Host: ${host}, User: ${user}`);
                fs.writeFileSync(`${root}/Projectprofile.pjs`, `Name: ${name}, Root: ${root}, Host: ${host}, User: ${user}`);

            },3000)
        }, 2000);
    }, 14000);
}
module.exports = {
    NewApplication
}