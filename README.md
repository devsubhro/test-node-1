# test-node-1
test a node restful api with mocha and chai

Use
express
config
body-parser
sequelize, with mysql2

only for dev version (--save-dev)
mocha
chai
chai-http

To set the config
create a folder called config
create config/default.json

For production, create config/production.json and start node as
export NODE_ENV=production
node my-app.js

After setup, remember to run node test/db_connection.js

