var edad
edad = parseInt(edad)
edad = prompt("Escriba su edad:");
if (edad <= 5) {
    alert("preescolar");
}else if (edad <=11){
    alert("primaria");
}else if (edad <= 16){
    alert("ESO");
}else if (edad <= 21){
    alert("Bachillerato o Ciclos");
}else {
    alert("Universidad")
}