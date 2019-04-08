/****
 * test the db connection using modules/sql.js
 */
const sql = require('../modules/sql.js');

 async function test_connection() {
     try {
         await sql.authenticate();
         return true;
     }catch(err) {
         return false;
     }
 }
const ok = test_connection();
if(ok) {
    console.log('Connection has been established successfully.');
    
}else{
    console.error('Unable to connect to the database:');
}