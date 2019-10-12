const UnitPriceRouter = require('express').Router();
const UnitPriceController = require('../controllers/UnitPriceController');
const Authenticate = require('../middleware/AuthMiddleware')

UnitPriceRouter.get('/api/unit-price', Authenticate.verify, UnitPriceController.findAll);
UnitPriceRouter.post('/api/unit-price', Authenticate.verify, UnitPriceController.create);
UnitPriceRouter.get('/api/unit-price/latest', Authenticate.verify, UnitPriceController.getUnitPriceLatest);

module.exports = UnitPriceRouter;