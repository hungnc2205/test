var roleRouter = require('express').Router();
var roleService = require('../services/role');
var authenticate = require('../middleware/auth')

roleRouter.get('/api/role', authenticate.verify, roleService.findAll);
roleRouter.post('/api/role', authenticate.verify, roleService.create);

module.exports = roleRouter;