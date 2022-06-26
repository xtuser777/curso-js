const paragrafos = document.querySelector(".paragrafos");
const listParagrafos = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
let backgroundBodyColor = estilosBody.backgroundColor;

for (let p of listParagrafos) {
    p.style.backgroundColor = backgroundBodyColor;
    p.style.color = "#FFF"
}