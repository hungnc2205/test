const AuthService = require('../services/AuthService');

let AuthController = {};

AuthController.login = async (req, res) => {

    let token = await AuthService.login(req.body.username, req.body.password);
    
    if (!token) {
        return res.status(401).json({
            error: 'Username or password invalid'
        })
    }

    return res.status(200).json({
        token: token
    })

}

module.exports = AuthController;