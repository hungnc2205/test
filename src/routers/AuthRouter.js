const AuthRouter = require('express').Router();
const AuthController = require('../controllers/AuthController')

AuthRouter.post('/login', AuthController.login);

module.exports = AuthRouter;