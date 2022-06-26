const nome = 'Lucas';
const sobrenome = 'Oliveira';

const falaNome = () => `${nome} ${sobrenome}`;

//module.exports.falaNome = falaNome;

//exports.falaNome = falaNome;

class Pessoa {
  constructor(nome, sobrenome) {
    Object.defineProperty(this, 'Nome', {
      enumerable: false,
      configurable: false,
      get: () => nome
    });

    Object.defineProperty(this, 'Sobrenome', {
      enumerable: false,
      configurable: false,
      get: () => sobrenome
    });

    Object.defineProperty(this, 'NomeCompleto', {
      enumerable: false,
      configurable: false,
      get: () => `${nome} ${sobrenome}`
    });
  }

  falaNome() {
    return `${nome} ${sobrenome}`;
  }
}

module.exports = {
  falaNome, Pessoa
};