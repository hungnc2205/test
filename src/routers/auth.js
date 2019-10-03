var authRouter = require('express').Router();
var authController = require('../services/auth');

authRouter.post('/login', authController.login);

module.exports = authRouter;