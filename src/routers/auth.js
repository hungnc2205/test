var authRouter = require('express').Router();
var authController = require('../controllers/auth');

authRouter.post('/login',authController.login);


module.exports = authRouter;