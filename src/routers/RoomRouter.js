const RoomRouter = require('express').Router();
const RoomService = require('../services/RoomService');
const Authenticate = require('../middleware/AuthMiddleware')

RoomRouter.get('/api/room', Authenticate.verify, RoomService.findAll);
RoomRouter.post('/api/room', Authenticate.verify, RoomService.create);

module.exports = RoomRouter;