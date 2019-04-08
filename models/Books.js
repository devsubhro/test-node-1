const sql = require('../modules/sql');

const Books_schema = sql.define('Books', {
    /****
     * we have id as primary key
     */
    id: {
        type: sequelize.DataTypes.INT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.DataTypes.STRING,
        unique: true
    },
    author: {
        type: sequelize.DataTypes.STRING
    },
    year: {
        type: sequelize.DataTypes.INT
    },
    pages: {
        type: sequelize.DataTypes.INT
    }
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