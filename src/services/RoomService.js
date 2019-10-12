const db = require('../config/sequelize');

var RoomService = {};

RoomService.findAll = (req, res) => {
    return db.Room.findAll().then(rooms => {
        return {
            status: true,
            info: rooms
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

RoomService.create = (room) => {
    return db.Room.create(room).then(room => {
        return {
            status: true,
            info: room
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

module.exports = RoomService;