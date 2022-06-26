class ValidaCPF {
    constructor(cpfFormatado) {
        Object.defineProperty(this, 'cpf', {
            enumerable: false,
            configurable: false,
            get: () => cpfFormatado.replace(/\D+/g, "")
        })
    }

    calcDigit(calc) {
        return (11 - (calc % 11) > 9) ? 0 : (11 - (calc % 11));
    }

    calcNumbers(mult, numbers) {
        return numbers.reduce((ac, value) => {
            ac += value * mult;
            mult--;
            return ac;
        }, 0);
    }

    getDigits() {
        return this.cpf.slice(-2, this.cpf.lentgh).split("").map(value => Number(value));
    }

    getNumbers(push = -1) {
        let numbers = this.cpf.slice(0, -2).split("").map(value => Number(value));
        if (push >= 0) numbers.push(push);
        return numbers;
    }

    validar() {
        if(typeof this.cpf === "undefined") return false;
        if(this.cpf.length !== 11) return false;
        if((this.cpf[0].repeat(this.cpf.length)) === this.cpf) return false;
    
        if (this.calcDigit(this.calcNumbers(10, this.getNumbers())) !== this.getDigits()[0]) return false;
    
        return this.calcDigit(this.calcNumbers(11, this.getNumbers(this.getDigits()[0]))) === this.getDigits()[1];
    }
}