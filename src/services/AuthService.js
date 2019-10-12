const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../config/sequelize');
const bcrypt = require('bcrypt')

var AuthService = {};

AuthService.login = async (username, password) => {

    let user = await getInfoByUsernamPassword(username, password);

    if (!user) {
        return;
    }

    const payload = {
        userInfo: {
            username: user.username,
            role: user.role,
            email: user.email
        }
    };

    let token = jwt.sign(payload, config.secret, {
        expiresIn: 1440 // expires in 1 day
    });

    return token;

}

let getInfoByUsernamPassword = async (username, password) => {
    let user = await findByUsername(username);

    if (!user) {
        return;
    }

    if (!isValidPassword(password, user.password)) {
        return;
    }

    return user;
}

let findByUsername = (username) => {
    return db.User.findOne({
        where: {
            username: username
        }
    }).then(user => {
        return Promise.resolve(user);
    });
}

let isValidPassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = AuthService;