class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', e => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.fieldsValidate() && this.passwordValidate()) {
            alert('Formulário validado e enviado.');
            this.formulario.submit();
        }
    }

    fieldsValidate() {
        let valid = true;

        for (let error of this.formulario.querySelectorAll('.error-text')) {
            error.remove();
        }

        for (let field of this.formulario.querySelectorAll('.validar')) {
            let label = field.previousElementSibling.innerText;

            if (!field.value) {
                valid = false;
                this.addError(field, `Campo "${label}" não pode estar vazio.`);
            }

            if (field.classList.contains('cpf')) valid = this.cpfValidator(field);

            if (field.classList.contains('usuario')) valid = this.userValidate(field);
        }

        return valid;
    }

    passwordValidate() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.addError(senha, 'Campos senha e repetir senha precisar ser iguais.');
            this.addError(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.addError(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    cpfValidator(field) {
        const validaCpf = new ValidaCPF(field.value);
        if (!validaCpf.validar()) {
            this.addError(field, 'CPF inválido.');
            return false;
        }

        return true;
    }

    userValidate(field) {
        let valid = true;

        if (field.value.length < 3 || field.value.length > 12) {
            valid = false;
            this.addError(field, 'O nome de usuário deve conter entre 3 e 12 caracteres.');
        }

        if (!field.value.match(/^[a-zA-Z0-9]+$/g)) {
            valid = false;
            this.addError(field, 'O nome de usuário deve conter apenas letras e/ou números.');
        }

        return valid;
    }

    addError(field, msg) {
        let div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validator = new ValidaFormulario();