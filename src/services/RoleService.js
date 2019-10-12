const db = require('../config/sequelize');

var RoleService = {};

RoleService.findAll = () => {
    return db.Role.findAll().then(roles => {
        return {
            status: true,
            info: roles
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

RoleService.create = (role) => {
    return db.Role.create(role).then(role => {
        return {
            status: true,
            info: role
        }
    }).catch(error => {
        return {
            status: true,
            info: error
        }
    });
}

module.exports = RoleService;