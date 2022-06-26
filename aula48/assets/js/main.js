const tarefas = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.input-tarefa');

function criaBotao() {
    const button = document.createElement('button');
    button.innerText = "Apagar";
    button.classList.add('apagar');

    return button;
}

function criaTarefa(descricao) {
    const tarefa = document.createElement('li');
    tarefa.innerText = descricao;
    tarefa.appendChild(criaBotao());

    return tarefa;
}

function limpaCampo() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function salvarTarefas() {
    let listaElementos = tarefas.querySelectorAll('li');
    let listaTarefas = [];

    for(let element of listaElementos) {
        let texto = element.innerText.replace('Apagar', '').trim();
        listaTarefas.push(texto);
    }

    localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
}

function adicionaTarefa(descricao) {
    if(!inputTarefa.value) return;
    const tarefa = criaTarefa(descricao);
    tarefas.appendChild(tarefa);
    salvarTarefas();
    limpaCampo();
}

function apagarTarefa(element) {
    element.parentElement.remove()
    salvarTarefas();
    inputTarefa.focus();
}

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-tarefa')) {
        adicionaTarefa(inputTarefa.value);
    }
    if(e.target.classList.contains('apagar')) {
        apagarTarefa(e.target);        
    }
});

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        adicionaTarefa(inputTarefa.value);
    }
});

function carregarTarefas() {
    let lista = JSON.parse(localStorage.getItem('tarefas'));

    for (let element of lista) {
        const tarefa = criaTarefa(element);
        tarefas.appendChild(tarefa);
    }
}

carregarTarefas();