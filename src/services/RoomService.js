const db = require('../config/sequelize');

var RoomService = {};

RoomService.findAll = (req, res) => {
    db.Room.findAll().then(rooms => {
        return res.status(200).json({
            data: rooms
        })
    }).catch(err => {
        return res.status(500).json({
            error: err
        })
    });
}

RoomService.create = (req, res) => {
    db.Room.create(req.body).then(rooms => {
        return res.status(200).json({
            data: rooms
        })
    }).catch(err => {
        return res.status(500).json({
            error: err
        })
    });
}

module.exports = RoomService;