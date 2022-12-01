function length(){
  long = document.getElementById('texto').value;
  t = long.split(" ").join("");
  document.getElementById('lonng').value = t.length;
}
function reemplazo(){
  long = document.getElementById('texto').value;
 t = long.replaceAll("a", "@").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("u", "9")
 .replaceAll("A", "@").replaceAll("E", "3").replaceAll("I", "1").replaceAll("O", "0").replaceAll("U", "9");
  document.getElementById('reem').value = t;
}
function mi(){
  long = document.getElementById('texto').value;
  document.getElementById('cambio').value = long.toLowerCase();
}
function MA(){
  long = document.getElementById('texto').value;
  document.getElementById('cambio').value = long.toUpperCase();
}