const RoomInfoService = require('../services/RoomInfoService');

const RoomInfoController = {};

RoomInfoController.findAll = async (req, res) => {

    let result = await RoomInfoService.findAll();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

RoomInfoController.create = async (req, res) => {

    let result = await RoomInfoService.create(req.body);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

RoomInfoController.findByRoom = async (req, res) => {

    let result = await RoomInfoService.findByRoom(req.params.roomId);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

module.exports = RoomInfoController;