const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../config/sequelize');
const bcrypt = require('bcrypt')

var authService = {};

authService.login = async (req, res) => {

    let user = await findByUsername(req.body.username);

    if (!user) {
        return res.status(404).json({ message: "User not found !" });
    }

    if (!isValidPassword(req.body.password, user.password)) {
        return res.status(400).json({ message: "Password Invalid!" });
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

    res.status(200).json({
        token: token
    });

}

let findByUsername = (username) => {
    return db.user.findOne({
        where: {
            username: username
        }
    }).then(user => {
        return Promise.resolve(user);
    });
}

let isValidPassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = authService;