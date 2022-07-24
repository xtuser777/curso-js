import validator from "validator";

export default class Login {
    constructor(formClass) {
        if (!formClass || typeof formClass !== 'string') {
            console.error('Constructor param invalid.');
            return;
        }

        this.form = document.querySelector(formClass);
    }

    init = () => (this.form) ? this.addListeners() : null;

    addListeners = () => this.form.addEventListener("submit", e => this.formEvent(e));

    formEvent(e) {
        e.preventDefault();
        this.validate();
    }

    validate() {
        let email = this.form.querySelector('input[name="email"]');
        let password = this.form.querySelector('input[name="password"]');

        let error = false;

        if (!validator.isEmail(email.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if (password.value.length < 3 || password.value.length > 50) {
            alert('A senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        }

        if (!error) this.form.submit();
    }
}