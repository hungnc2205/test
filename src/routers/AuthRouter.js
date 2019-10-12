const AuthRouter = require('express').Router();
const AuthService = require('../services/AuthService');

AuthRouter.post('/login', AuthService.login);

module.exports = AuthRouter;