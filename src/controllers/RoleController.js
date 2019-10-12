const RoleService = require('../services/RoleService');

const RoleController = {};

RoleController.findAll = async (req, res) => {

    let result = await RoleService.findAll();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

RoleController.create = async (req, res) => {

    let result = await RoleService.create(req.body);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })

}

module.exports = RoleController;