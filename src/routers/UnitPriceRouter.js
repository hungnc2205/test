const UnitPriceRouter = require('express').Router();
const UnitPriceService = require('../services/UnitPriceService');
const Authenticate = require('../middleware/AuthMiddleware')

UnitPriceRouter.get('/api/unit-price', Authenticate.verify, UnitPriceService.findAll);
UnitPriceRouter.post('/api/unit-price', Authenticate.verify, UnitPriceService.create);
UnitPriceRouter.get('/api/unit-price/latest', Authenticate.verify, UnitPriceService.getUnitPriceLatest);

module.exports = UnitPriceRouter;