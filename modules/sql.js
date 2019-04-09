const sequelize = require('sequelize');
const config = require('config');
const fs = require('fs');

const db_config = config.get('db_config');

const sql = new sequelize(db_config.name, db_config.user, db_config.password, {
    "host": db_config.host,
    "dialect": 'mysql',
    "dialectOptions": {
        multipleStatements: true
    }
});
/****
 * load execsql if this is running in test setup. The execsql is used to
 * run setup and cleanup sqls written in .sql files
 */
/*let execsql = null;

/*if(process.env.NODE_ENV == 'test') {
    execsql = require('../modules/my_execsql');
    execsql.config(db_config.host, db_config.user, db_config.password);
    execsql.use_db = db_config.name;
}

module.exports = {
    sql: sql,
    sequelize: sequelize,
    execsql: execsql
};*/
const readFile = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const exec_sql_file = async function(filename) {
    try {
        const data = await readFile(filename);
        await sql.query(data);
    } catch (e) {
        console.log(`cannot execute queries from the file ${filename}`,e);
        process.exit();
    }
};
module.exports = {
    sql: sql,
    sequelize: sequelize,
    exec_sql_file: exec_sql_file
};