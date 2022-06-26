const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
//const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const Pessoas = [
//     { nome: 'Tadano Hitohito' },
//     { nome: 'Komi Shouko' },
//     { nome: 'Osama Najimi'},
//     { nome: 'Yadano Makeru'}
// ];

// let data = JSON.stringify(Pessoas, '', 2);

// escrever(filePath, data);

async function loadJson(file) {
    let dados = await ler(file);
    showData(convertJson(dados));
}

const convertJson = (json) => JSON.parse(json);

const showData = (data) => data.forEach(value => console.log(value.nome));

loadJson(filePath);