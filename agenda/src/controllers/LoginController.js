const Login = require('../models/Login');

class LoginController {

    static index(req, res) {
        return res.render('login/index', { title: 'Login - Index'});
    }

    static registerUser(req, res) {
        let login = new Login(req.body);
        login.register();

        return res.send(login.errors);
    }
}

module.exports = LoginController;