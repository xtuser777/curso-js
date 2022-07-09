const Login = require('../models/Login');

class LoginController {
    constructor() { }

    index(req, res) {
        return res.render('login/index', { title: 'Login - Index'});
    }

    register(req, res) {
        const l = new Login(req.body);
        l.register();

        return res.send(l.errors);
    }
}

module.exports = LoginController;