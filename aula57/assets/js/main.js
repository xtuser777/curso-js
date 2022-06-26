/*function Calculadora() {
    return {
        display: undefined,
        shift: false,

        init() {
            this.display = document.querySelector('.display');
            this.display.readOnly = true;

            this.createListeners();
        },

        clearDisplay() {
            this.display.value = '';
        },

        enterDigit(digit) {
            this.display.value += digit;
        },

        deleteDigit() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let result = 0;
            try {
                result = eval(this.display.value);

                this.display.value = String(result);
            } catch (error) {
                alert("Cálculo inválido.");
            }
        },

        filterClickActions(e) {
            let element = e.target;
            
            if (element.classList.contains('btn-num')) {
                this.enterDigit(element.innerText);
            }
            
            if (element.classList.contains('btn-clr')) {
                this.clearDisplay();
            } 

            if (element.classList.contains('btn-del')) {
                this.deleteDigit();
            } 
            
            if (element.classList.contains('btn-eq')) {
                this.calculate();
            }

            this.display.focus();
        },

        filterKeyActions(e) {
            if (e.keyCode === 8) {
                e.preventDefault();
                this.deleteDigit();
            }

            if (e.keyCode === 13) {
                this.calculate();
            }

            if (e.keyCode === 16) {
                this.shift = true;
            }

            if (e.keyCode === 27) {
                this.clearDisplay();
            }

            if (e.keyCode === 49 || e.keyCode === 97) {
                this.display.value += "1";
            }

            if (e.keyCode === 50 || e.keyCode === 98) {
                this.display.value += "2";
            }

            if (e.keyCode === 51 || e.keyCode === 99) {
                this.display.value += "3";
            }

            if (e.keyCode === 52 || e.keyCode === 100) {
                this.display.value += "4";
            }

            if (e.keyCode === 53 || e.keyCode === 101) {
                if (e.keyCode === 53 && this.shift) {
                    this.display.value += "%";
                    this.shift = false;
                } else {
                    this.display.value += "5";
                }
            }

            if (e.keyCode === 54 || e.keyCode === 102) {
                this.display.value += "6";
            }

            if (e.keyCode === 55 || e.keyCode === 103) {
                this.display.value += "7";
            }

            if (e.keyCode === 56 || e.keyCode === 104) {
                if (e.keyCode === 56 && this.shift) {
                    this.display.value += "*";
                    this.shift = false;
                } else {
                    this.display.value += "8";
                }
            }

            if (e.keyCode === 57 || e.keyCode === 105) {
                if (e.keyCode === 57 && this.shift) {
                    this.display.value += "(";
                    this.shift = false;
                } else {
                    this.display.value += "9";
                }
            }

            if (e.keyCode === 48 || e.keyCode === 96) {
                if (e.keyCode === 48 && this.shift) {
                    this.display.value += ")";
                    this.shift = false;
                } else {
                    this.display.value += "0";
                }
            }

            console.log(e.keyCode);
        },

        createListeners() {
            document.addEventListener('click', e => this.filterClickActions(e));

            this.display.addEventListener('keydown', e => this.filterKeyActions(e));
        }
    };
}

const calc = Calculadora();
calc.init();*/ // Aula 57

function Calculadora() { // Aula 59
    this.display = undefined;
    let shift = false;

    this.init = function() {
        this.display = document.querySelector('.display');
        this.display.readOnly = true;

        this.createListeners();
    };

    this.clearDisplay = () => this.display.value = '';

    this.enterDigit = (digit) => this.display.value += digit;

    this.deleteDigit = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = function() {
        let result = 0;
        try {
            result = eval(this.display.value);

            this.display.value = String(result);
        } catch (error) {
            alert("Cálculo inválido.");
        }
    };

    this.filterClickActions = function(e) {
        let element = e.target;
        
        if (element.classList.contains('btn-num')) {
            this.enterDigit(element.innerText);
        }
        
        if (element.classList.contains('btn-clr')) {
            this.clearDisplay();
        } 

        if (element.classList.contains('btn-del')) {
            this.deleteDigit();
        } 
        
        if (element.classList.contains('btn-eq')) {
            this.calculate();
        }

        this.display.focus();
    };

    this.filterKeyActions = function(e) {
        if (e.keyCode === 8) {
            e.preventDefault();
            this.deleteDigit();
        }

        if (e.keyCode === 13) {
            this.calculate();
        }

        if (e.keyCode === 16) {
            this.shift = true;
        }

        if (e.keyCode === 27) {
            this.clearDisplay();
        }

        if (e.keyCode === 49 || e.keyCode === 97) {
            this.display.value += "1";
        }

        if (e.keyCode === 50 || e.keyCode === 98) {
            this.display.value += "2";
        }

        if (e.keyCode === 51 || e.keyCode === 99) {
            this.display.value += "3";
        }

        if (e.keyCode === 52 || e.keyCode === 100) {
            this.display.value += "4";
        }

        if (e.keyCode === 53 || e.keyCode === 101) {
            if (e.keyCode === 53 && this.shift) {
                this.display.value += "%";
                this.shift = false;
            } else {
                this.display.value += "5";
            }
        }

        if (e.keyCode === 54 || e.keyCode === 102) {
            this.display.value += "6";
        }

        if (e.keyCode === 55 || e.keyCode === 103) {
            this.display.value += "7";
        }

        if (e.keyCode === 56 || e.keyCode === 104) {
            if (e.keyCode === 56 && this.shift) {
                this.display.value += "*";
                this.shift = false;
            } else {
                this.display.value += "8";
            }
        }

        if (e.keyCode === 57 || e.keyCode === 105) {
            if (e.keyCode === 57 && this.shift) {
                this.display.value += "(";
                this.shift = false;
            } else {
                this.display.value += "9";
            }
        }

        if (e.keyCode === 48 || e.keyCode === 96) {
            if (e.keyCode === 48 && this.shift) {
                this.display.value += ")";
                this.shift = false;
            } else {
                this.display.value += "0";
            }
        }

        console.log(e.keyCode);
    };

    this.createListeners = function() {
        document.addEventListener('click', e => this.filterClickActions(e));

        this.display.addEventListener('keydown', e => this.filterKeyActions(e));
    };
}

const calc = new Calculadora();
calc.init();