const RoomService = require('../services/RoomService');

const RoomController = {};

RoomController.findAll = async (req, res) => {

    let result = await RoomService.findAll();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

RoomController.create = async (req, res) => {
    let result = await RoomService.create(req.body);
    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

module.exports = RoomController;