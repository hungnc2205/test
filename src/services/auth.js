const dataFake = require('../config/dataFake')
const jwt = require('jsonwebtoken');
const config = require('../config/config');

var authService = {};

authService.login = function (req, res) {
    let user;
    dataFake.users.forEach((item)=>{
        if (req.body.username === item.username && req.body.password === item.password) {
            user = item;
        }
    })

    if (!user) {
        return res.status(404).json({ message: "user not found !" })
    }

    const payload = {
        userInfo: {
            username: user.username,
            role: user.role,
            email: user.email
        }
    };

    let token = jwt.sign(payload, config.secret, {
        expiresIn: 300 // expires in 1 minute
    });

    res.status(200).json({
        token: token
    });

}

module.exports = authService;