const container = document.querySelector(".container");
const div = document.createElement("div");

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

function createElement(tag, value) {
    const element = document.createElement(tag);
    const text = document.createTextNode(value);
    element.appendChild(text);

    return element;
}

function main() {
    for (let i = 0; i < elementos.length; i++) {
        let {tag, texto} = elementos[i];
        div.appendChild(createElement(tag, texto));
    }
    
    container.appendChild(div);
}

main();