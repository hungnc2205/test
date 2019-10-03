var roleRouter = require('express').Router();
var roleController = require('../services/role');
var authenticate = require('../middleware/auth')

roleRouter.get('/api/role', authenticate.checkPermission, roleController.findAll);
roleRouter.post('/api/role', authenticate.checkPermission, roleController.create);

module.exports = roleRouter;