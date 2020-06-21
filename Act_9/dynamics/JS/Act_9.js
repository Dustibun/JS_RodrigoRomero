function Numero() { //Creo un numero aleatorio
  return Math.round(Math.random() * 99) + 1;
}
let a=0;
let estado=true;

let guardados=[];
console.log(guardados);

function Checar(){ //Checa si los numeros son correctos
  if (estado=true) {
    let numero=Numero();
    guardados.push(numero);
    alert(numero);
    for (var i = 0; i < guardados.length; i++) {
      respuesta = prompt("Dime el número "+(i+1));
      console.log(guardados);
      if (respuesta!=guardados[i]) {
        estado=false;
        alert("Te equivocaste :(")
        return false;
      }
      }
      return true;
    }
  }


function Mandar() { //Repito 5 veces para lograr el resultado
  setTimeout(()=>{
  estado = Checar();
  setTimeout(()=>{
    estado = Checar();
    setTimeout(()=>{
      estado = Checar();
      setTimeout(()=>{
        estado = Checar();
        setTimeout(()=>{
          estado = Checar();
        },2000)
      },2000)
    },2000)
  },2000)
  },3000)
  console.log(guardados);
}

Mandar();
