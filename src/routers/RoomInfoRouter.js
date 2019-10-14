const RoomInfoRouter = require('express').Router();
const RoomInfoController = require('../controllers/RoomInfoController');
const Authenticate = require('../middleware/AuthMiddleware')

RoomInfoRouter.get('/api/room-info', Authenticate.verify, RoomInfoController.findAll);
RoomInfoRouter.post('/api/room-info', Authenticate.verify, RoomInfoController.create);
RoomInfoRouter.get('/api/room-info/:roomId', Authenticate.verify, RoomInfoController.findByRoom);

module.exports = RoomInfoRouter;