let body = document.getElementsByTagName("body")[0];
let titulo = document.createElement("h1");
titulo.innerText="Tablero de Ajedrez";
let margen = document.createElement("div");
body.prepend(titulo,margen); //Hago uso de DOM


let largo=prompt("Ingresa el largo :)"); //Recibo valores
let ancho=prompt("Ingresa el ancho :)");


largo=parseInt(largo);
ancho=parseInt(ancho);

let tabla = document.createElement("table");//Creo una tabla
margen.appendChild(tabla);


for (var i = 0; i < ancho; i++) { //Dependiendo los numeros hago una iteracion
  let fila = document.createElement("tr");
  tabla.appendChild(fila);
  console.log(i);
  let c=i%2;
  if (c==0) {
    console.log("par");
    fila.classList.add("blue");
    let check=1;
  }
  for (var a = 0; a < largo; a++) {
    let columna = document.createElement("td");
    if (c==0) {
      columna.classList.add("inpar");
    }
    fila.appendChild(columna);
  }
}
