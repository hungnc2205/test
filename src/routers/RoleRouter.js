const RoleRouter = require('express').Router();
const RoleService = require('../services/RoleService');
const Authenticate = require('../middleware/AuthMiddleware')

RoleRouter.get('/api/role', Authenticate.verify, RoleService.findAll);
RoleRouter.post('/api/role', Authenticate.verify, RoleService.create);

module.exports = RoleRouter;