var app = require('./app');
const uuid = require('uuid');


app.get('/', (req, res) => {
    res.status(200).send(`Hello, ${uuid()}!`);
});

/**
 * Start Express server.
 */
app.listen(3000, () => {
    console.log('App is running at http://localhost:3000');
});
