const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let segundos = 0;

let timer;

function retornaTimer() {
    let date = new Date(segundos * 1000);

    return date.toLocaleTimeString(
        'pt-BR', 
        {
            hour12: false,
            timeZone: 'UTC'
        }
    )
}

function iniciaTimer() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = retornaTimer();
    }, 1000);
}

function pausarTimer() {
    relogio.classList.add('pausado');
    clearInterval(timer);
}

function zerarTimer() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('iniciar')) {
        iniciaTimer();
    } 
    if (e.target.classList.contains('pausar')) {
        pausarTimer();
    }
    if (e.target.classList.contains('zerar')) {
        zerarTimer();
    }
});

