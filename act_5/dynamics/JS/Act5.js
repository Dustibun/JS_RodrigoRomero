let codigo="<script>fcsdequisdeequisdesfiohfhasfiequisdehiofahiufhbequisdeofaiehoawifequisdeequfui</script>"
codigo=prompt("¿Conoces la palabra?");


let script=codigo.match(/(<script>).*(<\/script>)/gm);

let equisde=codigo.split(["equisde"]);
equisde=equisde.length;

if (equisde==6 && script!=null) {
  console.log("Hacker");
  alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.")
}
else if (equisde==6 || script!=null) {
  console.log("Wade?");
  alert("¿Bob?\n¿Wade?")
}
else if (codigo=="Si") {
  alert("Me alegra que conozcas la palabra")
}
else {
  alert("Largo no  me interesa si no conoces la palabra\n y tampoco formas parte de mi misión aunque... \nno tengo ninguna misión (wink, wink)")
}
