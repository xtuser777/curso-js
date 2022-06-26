function main() {
    const formulario = document.querySelector('#formulario');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('#resultado');

    function recebeDadosForm(e) {
        e.preventDefault();

        let vPeso = Number(peso.value);
        let vAltura = Number(altura.value);

        //if (Number.isNaN(vPeso) || vPeso === undefined) {
        if (!vPeso) {
            resultado.innerHTML = "<p class='err'>Valor peso incorreto.</p>";
        //} else if (Number.isNaN(vAltura) || vAltura === undefined) {
        } else if (!vAltura) {
            resultado.innerHTML = "<p class='err'>Valor altura incorreto.</p>";
        } else {
            let imc = vPeso / (vAltura * vAltura);

            let resultados = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

            let msg = '';

            if (imc < 18.5) {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[0]})`;
            } else if (imc >= 18.5 && imc < 25) {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[1]})`;
            } else if (imc >= 25 && imc < 30) {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[2]})`;
            } else if (imc >= 30 && imc < 35) {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[3]})`;
            } else if (imc >= 35 && imc < 40) {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[4]})`;
            } else {
                msg = `Seu IMC é ${imc.toFixed(1)} (${resultados[5]})`;
            }

            resultado.innerHTML = `<p class='result'>${msg}.</p>`;
        }
    }

    formulario.addEventListener('submit', recebeDadosForm);
}

main();
