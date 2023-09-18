/*
&& -> Retorna o primeiro valor falso, se existir uma expressão falsa nas expressões. Caso todas as expressões sejam verdadeiras, retorna o valor da última expressão.
|| -> Retorna o primeiro valor verdadeiro, se existir uma expressão verdadeira nas expressões. Caso todas as expressões sejam falsas, retorna o valor da última expressão.
*/

const [a, b, c] = [true, true, 'Lucas'];

console.log(a && b && c); // imprime o valor da variável c (Lucas) como sendo o último valor verdadeiro.

console.log(a || b || c); // imprime o valor da variavel a pois é o primeiro valor verdadeiro.
