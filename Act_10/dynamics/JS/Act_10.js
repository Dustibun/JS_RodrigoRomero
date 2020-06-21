let arreglo = [];
let mensError="Mala suerte crack";
function agregarNumero(posicion) {  //Esta funcion crea y arreglo mi numero aleatorio
  for (var i = 0; i < 5; i++) {
    let numero = Math.round(Math.random() * 99) + 1;
    arreglo.push(numero);
  }
  console.log(arreglo);
}
agregarNumero(); //Verifica los numeros y checa su posicion
function checar(posicion) {
  alert("Ronda "+posicion+ ", el número es "+ arreglo[posicion-1])
  let veces=0;
  for(var i = 0; i< posicion; i++){
    let respuesta = prompt("Dime el número");
    if (respuesta==arreglo[i]) {
      veces++;
      if (veces==posicion) {
        console.log("yei");
        return true;
      }
    }
    else {
      return false;
    }
  }
}
const prom = new Promise((resolve, reject) => { //Las promesas que si nos e cumple una el catch error hace un alert
  if (checar(1)==true) {
    resolve()
  }
  else {
    reject()
  }
}).then(()=>{
  return new Promise ((resolve, reject)=>{
    if (checar(2)==true) {
      resolve()
    }
    else {
      reject()
    }
  })
}).then(()=>{
  return new Promise ((resolve, reject)=>{
    if (checar(3)==true) {
      resolve()
    }
    else {
      reject()
    }
  })
}).then(()=>{
  return new Promise ((resolve, reject)=>{
    if (checar(4)==true) {
      resolve()
    }
    else {
      reject()
    }
  })
}).then(()=>{
  return new Promise ((resolve, reject)=>{
    if (checar(5)==true) {
      resolve(alert("Wuuuu ganaste!!!"))
    }
    else {
      reject()
    }
  })
}).catch((error)=>{
  alert(mensError);
})
