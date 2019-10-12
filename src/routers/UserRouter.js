const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const Authenticate = require('../middleware/AuthMiddleware')

UserRouter.get('/api/user', Authenticate.verify, UserController.findAll);
UserRouter.post('/api/user', UserController.create);

module.exports = UserRouter;