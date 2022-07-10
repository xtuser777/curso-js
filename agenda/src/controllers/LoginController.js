const Login = require('../models/Login');

class LoginController {

    static index(req, res) {
        return res.render('login/index', { title: 'Login - Index'});
    }

    static async registerUser(req, res) {
        try {
            let login = new Login(req.body);
            await login.register();

            if (login.errors.length > 0) {
                req.flash('errors', login.errors);
                req.session.save(() => {
                    return res.redirect('/login');
                });
                return;
            }

            req.flash('success', "Usuário cadastrado com sucesso!");
            req.session.save(() => {
                return res.redirect('/login');
            });
        } catch(e) {
            console.error(e);
            return res.render('404');
        }
    }
}

module.exports = LoginController;