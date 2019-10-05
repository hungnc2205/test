const roleRouter = require('express').Router();
const roleService = require('../services/role');
const authenticate = require('../middleware/auth')

roleRouter.get('/api/role', authenticate.verify, roleService.findAll);
roleRouter.post('/api/role', authenticate.verify, roleService.create);

module.exports = roleRouter;