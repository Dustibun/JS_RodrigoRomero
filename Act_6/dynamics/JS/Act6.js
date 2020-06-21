let body = document.getElementsByTagName("body")[0];
let divDashed = document.createElement("div");
//divDashed.innerText = "FORM";
body.appendChild(divDashed);

let Titulo = document.createElement("h1");
Titulo.innerText = "Soy el más grande";
Titulo.classList.add("blue");

let Subti = document.createElement("h3");
Subti.innerText = "Curso Web 2020";

let Med = document.createElement("h3");
Med.innerText = "Mediano";
Med.classList.add("blue","italic");

let grandeJr = document.createElement("p");
grandeJr.innerText = "Jelou";
grandeJr.classList.add("red");

let parrafo = document.createElement("p");
parrafo.innerText = "Estoy medio chiquito";

let Mediano = document.createElement("h4")
divDashed.prepend(Titulo, Subti, Med, grandeJr,parrafo);
//Hago uso de DOM y css para piratearme la pagina de la actividad
