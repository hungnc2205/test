
var app = require('./app');



/**
 * Start Express server.
 */
var server = app.listen(3000, function () {
    console.log('App is running at http://localhost:3000');
});
