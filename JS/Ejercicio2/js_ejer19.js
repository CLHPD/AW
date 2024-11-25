var numero
numero = prompt("Escriba un numero:");
resultado2 = numero % 2
resultado3 = numero % 3
resultado5 = numero % 5
if (isNaN(numero)){
    alert("Escriba un numero mmgv");
} 
if (resultado2 == 0){
    document.writeln("Es multiplo de 2" + "<br>");
} 
if (resultado3 == 0){
    alert("Es multiplo de 3" + "<br>");
} 
if (resultado5 == 0){
    alert("Es multiplo de 5" + "<br>");
}