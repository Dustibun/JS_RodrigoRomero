var Gama=prompt("¿Cúal es el piso de Gamma?")
var Piso1=prompt("¿En qué piso esta el primer elevador?")
var Piso2=prompt("¿En qué piso esta el segundo elevador?")

var Gama = parseInt(Gama);
var Piso1 = parseInt(Piso1);
var Piso2 = parseInt(Piso2);
var Result1=0;
var Result2=0;

while (Piso1!=Gama) {
  if (Gama>Piso1) {
    Result1+=1;
    Piso1+=1;
  }
  else {
    Result1+=1;
    Piso1-=1;
  }
}
while (Piso2!=Gama) {
  if (Gama>Piso2) {
    Result2+=1;
    Piso2+=1;
  }
  else {
    Result2+=1;
    Piso2-=1;
  }
}

if (Result1<Result2) {
  alert("Toma el elevador 1");
}
else if (Result1>Result2) {
  alert("Toma el elevador 2");
}
else {
  alert("No importa cual tomes Gamita solo se feliz :)");
}
