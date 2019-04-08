/****
 * This is the server
 */
const express = require('express');
const body_parser = require('body-parser');
const config = require('config');

/***
 * create express app and add the middlewares
 */
const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));               
app.use(body_parser.text());                                    
app.use(body_parser.json({ type: 'application/json'}));

/***
 * get the routes from router.js
 * we pass the app and the function attach the handler to app
 */
const router = require('./router');
router(app);

app.listen(config.server.port);
console.log('Listening on port',config.server.port);

/*****
 * we export the app object as module export so that our testing code can access the innards of our app
 */
module.exports = app;
