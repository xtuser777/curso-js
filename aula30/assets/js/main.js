const data = document.querySelector("#data");

const date = new Date();

function getDayDescription(day) {
    switch (day) {
        case 0:
            return "domingo";
        case 1: 
            return "segunda-feira";
        case 2:
            return "terça-feira";
        case 3:
            return "quarta-feira";
        case 4: 
            return "quinta-feira";
        case 5: 
            return "sexta-feira";
        case 6:
            return "sábado";
        default:
            return "";
    }
}

function getMounthDescription(mounth) {
    switch (mounth) {
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";
        default:
            return "";
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const dia = zeroAEsquerda(date.getDate());
    const mes = date.getMonth();
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());
    const seg = zeroAEsquerda(date.getSeconds());
  
    return `${getDayDescription(date.getDay())}, ${dia} de ${getMounthDescription(mes)} de ${ano} <br />${hora}:${min}`;
}

function main (){
    data.innerHTML = formatDate(date);
}

main();