const db = require('../config/sequelize');

var RoleService = {};

RoleService.findAll = (req, res) => {
    db.Role.findAll().then(roles => {
        return res.status(200).json({
            data: roles
        })
    }).catch(err => {
        return res.status(500).json({
            name: err.name,
            code: err.parent.code,
            msg: err.parent.message
        })
    });
}

RoleService.create = (req, res) => {
    db.Role.create(req.body).then(role => {
        return res.status(200).json({
            data: role
        })
    }).catch(err => {
        return res.status(500).json({
            name: err.name,
            code: err.parent.code,
            msg: err.parent.message
        })
    });
}

module.exports = RoleService;