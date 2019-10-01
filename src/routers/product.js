var productRouter = require('express').Router();
var productController = require('../controllers/product');
var authenticate = require('../middleware/auth')

productRouter.get('/products', authenticate.checkPermission, productController.findAll);

module.exports = productRouter;