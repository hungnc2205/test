const UserRouter = require('express').Router();
const userService = require('../services/UserService');
const Authenticate = require('../middleware/AuthMiddleware')

UserRouter.get('/api/user', Authenticate.verify, userService.findAll);
UserRouter.post('/api/user', userService.create);

module.exports = UserRouter;