const UserService = require('../services/UserService');

const UserController = {};

UserController.findAll = async (req, res) => {
    let result = await UserService.findAll();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

UserController.create = async (req, res) => {
    
    let result = await UserService.create(req.body);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

module.exports = UserController;