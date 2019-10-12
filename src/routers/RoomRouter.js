const RoomRouter = require('express').Router();
const RoomController = require('../controllers/RoomController');
const Authenticate = require('../middleware/AuthMiddleware')

RoomRouter.get('/api/room', Authenticate.verify, RoomController.findAll);
RoomRouter.post('/api/room', Authenticate.verify, RoomController.create);

module.exports = RoomRouter;