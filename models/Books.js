const db = require('../modules/sql');

const Books_schema = db.sql.define('Books', {
    /****
     * we have id as primary key
     */
    id: {
        type: db.sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: db.sequelize.DataTypes.STRING,
        unique: true
    },
    author: {
        type: db.sequelize.DataTypes.STRING
    },
    year: {
        type: db.sequelize.DataTypes.INTEGER
    },
    pages: {
        type: db.sequelize.DataTypes.INTEGER
    }
},{
    timesamps: true
},{
    /****
     * disable the modification of table names; By default, sequelize will automatically
     * transform all passed model names (first parameter of define) into plural.
     * if you don't want that, set the following
     */
    freezeTableName: true,
    // define the table's name
    tableName: 'Books',
});
module.exports = Books_schema;