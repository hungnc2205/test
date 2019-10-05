const userRouter = require('express').Router();
const userService = require('../services/user');
const authenticate = require('../middleware/auth')

userRouter.get('/api/user', authenticate.verify, userService.findAll);
userRouter.post('/api/user', userService.create);

module.exports = userRouter;