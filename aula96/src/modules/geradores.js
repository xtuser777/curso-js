import { rand } from './utils';

const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const simbols = '!@#$%¨&*()_+-=/*-.,?[]{}`~^;:<>\\|';
const geraSimbolo = () => simbols[rand(0, simbols.length)];

export const geraSenha = (qtd, maiusculas, minusculas, simbolos, numeros) => {
  qtd = Number(qtd);
  let senha = [];

  for(let i = 0; i < qtd; i++) {
    maiusculas && senha.push(geraMaiuscula());
    minusculas && senha.push(geraMinuscula());
    simbolos && senha.push(geraSimbolo());
    numeros && senha.push(geraNumero());
  }

  return senha.join('').slice(0, qtd);
}
