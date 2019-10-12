const db = require('../config/sequelize');
const bcrypt = require('bcrypt')

UserService = {}

UserService.findAll = (req, res) => {
    db.User.findAll().then(users => {
        return res.status(200).json({
            data: users
        })
    })
}

UserService.create = (req, res) => {

    let user = req.body;
    user.password = hashPassword(user.password);

    db.User.create(user).then(user => {
        return res.status(200).json({
            data: user
        })
    }).catch(err => {
        return res.status(500).json({
            error: err
        })
    })
}

let hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

module.exports = UserService;