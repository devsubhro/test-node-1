const sequelize = require('sequelize');
const config = require('config');

const db_config = config.get('db_config');

const sql = new sequelize(db_config.name, db_config.user, db_config.password, {
    "host": db_config.host,
    "dialect": 'mysql'
});

module.exports = sql;