var numero
numero = prompt("Escriba un numero:");
resultado2 = numero % 2
resultado3 = numero % 3
resultado5 = numero % 5
if (isNaN(numero)){
    alert("Escriba un numero mmgv");
} else if (resultado2 == 0){
    alert("Es multiplo de 2");
} else if (resultado3 == 0){
    alert("Es multiplo de 3");
} else if (resultado5 == 0){
    alert("Es multiplo de 5");
} else{
    alert("No es multiplo ni de 2, 3 o 5")
}