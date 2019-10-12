const RoleRouter = require('express').Router();
const RoleController = require('../controllers/RoleController');
const Authenticate = require('../middleware/AuthMiddleware')

RoleRouter.get('/api/role', Authenticate.verify, RoleController.findAll);
RoleRouter.post('/api/role', Authenticate.verify, RoleController.create);

module.exports = RoleRouter;