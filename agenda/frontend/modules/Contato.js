import validator from 'validator';

export default class Cadastro {
    constructor(formClass) {
        if (!formClass || typeof formClass !== 'string') {
            console.error('Constructor param invalid.');
            return;
        }

        this.form = document.querySelector(formClass);
    }

    init = () => (this.form) ? this.addListeners() : null;

    addListeners = () => this.form.addEventListener('submit', e => this.formEvent(e));

    formEvent(e) {
        e.preventDefault();
        this.validate();
    }

    validate() {
        let nome = this.form.querySelector('input[name="nome"]');
        let sobrenome = this.form.querySelector('input[name="sobrenome"]');
        let email = this.form.querySelector('input[name="email"]');
        let telefone = this.form.querySelector('input[name="telefone"]');

        let error = false;

        if (!nome.value) {
            alert('O campo nome é obrigatório.');
            error = true;
        }

        if (email.value && !validator.isEmail(email.value)) {
            alert('E-mail inválido.');
            error = true;
        }
            
        if (!email.value && !telefone.value) {
            alert('Ao menos um e-mail ou telefone deve ser informado.');
            error = true;
        }
    }
}