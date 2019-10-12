const db = require('../config/sequelize');
const bcrypt = require('bcrypt')

UserService = {}

UserService.findAll = () => {
    return db.User.findAll().then(users => {
        return {
            status: true,
            info: users
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

UserService.create = (user) => {

    user.password = hashPassword(user.password);

    return db.User.create(user).then(user => {
        return {
            status: true,
            info: user
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    })
}

let hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

module.exports = UserService;