const db = require('../config/sequelize');

var roleService = {};

roleService.findAll = function (req, res) {
    db.role.findAll().then(roles => {
        return res.status(200).json({
            data: roles
        })
    })
}

roleService.create = (req, res) => {
    db.role.create(req.body).then(role => {
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

module.exports = roleService;