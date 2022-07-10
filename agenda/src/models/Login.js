const mongoose = require('mongoose');
const validator = require('validator').default;

const schema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
});

const model = mongoose.model('Login', schema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    valida() {
        this.clear();
        if (!validator.isEmail(this.body.email)) 
            this.errors.push('E-mail inválido.');
        if (this.body.password.length < 3 || this.body.password.length > 50) 
            this.errors.push('Senha deve ter entre 3 e 50 caracteres.');
    }

    clear() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') this.body[key] = '';
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }    

    register() {
        this.valida();
        if (this.errors.length > 0) return;
    }
}

module.exports = Login;