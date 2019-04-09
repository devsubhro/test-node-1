/****
 * set env to test. The /modules/sql.js will read from /config/test.json
 * load the test related modules
 */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chai_http = require('chai-http');

chai.use(chai_http);
const should = chai.should();
/****
 * the application model and the server
 */
const db = require('../modules/sql');
const book = require('../models/Books.js');
const app = require('../index.js');

const sql_file = __dirname + '/clearall.sql';

run(db.use_db);

async function run(db_name) {
    try {
        await db.exec_sql_file(sql_file);
        console.log('db is ready');
        process.exit();
    } catch (err) {
        console.log(err);
    }
}
