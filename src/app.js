var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routers');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
module.exports = app;