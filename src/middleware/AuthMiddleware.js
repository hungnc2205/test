const jwt = require('jsonwebtoken');
const config = require('../config/config');

var Authenticate = {};

Authenticate.verify = (req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    var token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : res.status(401).json({
        error: {
            'name': 'JsonWebTokenRequired',
            'message': 'required token'
        }
    });

    // verifies secret and checks if the token is expired
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                error: err,
            })
        }
        req.decoded = decoded;
        console.log('=> ', decoded)
        next();
    });

}

module.exports = Authenticate;