const BillRouter = require('express').Router();
const BillController = require('../controllers/BillController');
const Authenticate = require('../middleware/AuthMiddleware')

BillRouter.post('/api/bill', Authenticate.verify, BillController.create);

module.exports = BillRouter;