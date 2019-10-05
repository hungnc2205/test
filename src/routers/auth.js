const authRouter = require('express').Router();
const authController = require('../services/auth');

authRouter.post('/login', authController.login);

module.exports = authRouter;