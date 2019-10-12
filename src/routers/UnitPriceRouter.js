const UnitPriceRouter = require('express').Router();
const UnitPriceService = require('../services/UnitPriceService');
const Authenticate = require('../middleware/AuthMiddleware')

UnitPriceRouter.get('/api/unit-price', Authenticate.verify, UnitPriceService.findAll);
UnitPriceRouter.post('/api/unit-price', Authenticate.verify, UnitPriceService.create);

module.exports = UnitPriceRouter;