const jwt = require('jsonwebtoken');
const config = require('../config/config');

var authenticate = {};

authenticate.verify = function (req, res, next) {

    var token = req.headers['access-token'];

    if (!token) {
        return res.status(401).json({
            message: 'Access Denied'
        });
    }

    // verifies secret and checks if the token is expired
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                error: err,
                message: 'Invalid token'
            })
        }
        req.decoded = decoded;
        next();
    });

}

module.exports = authenticate;