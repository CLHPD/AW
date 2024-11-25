var examen1
var examen2
var trabajo1
var trabajo2
examen1 = prompt("Escriba su nota del primer examen");
examen2 = prompt("Escriba su nota del segundo examen");
trabajo1 = prompt("Escriba su nota del primer trabajo");
trabajo2 = prompt("Escriba su nota del segundo trabajo");
var nota1
var nota2
nota1 = examen1 + examen2 - ((examen1 + examen2)*85/100);
nota2 = trabajo1 + trabajo2 - ((trabajo1 + trabajo2)*85/100);
if (nota1 >= 4.5 && nota2 >= 4.5){
    alert("Has aprobado");
} else {
    alert("Has suspendido")
}