var userRouter = require('express').Router();
var userService = require('../services/user');
var authenticate = require('../middleware/auth')

userRouter.get('/api/user', authenticate.verify, userService.findAll);
userRouter.post('/api/user', userService.create);

module.exports = userRouter;