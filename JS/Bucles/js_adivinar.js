var numero = prompt("Adivana el numero. Tienes 3 intentos");
var contador = 0
while(numero <= 6){
    numero = prompt("Escribe otro numero, el que has puesto era mas pequeño");
    contador++;
}
while(numero >= 8){
    numero = prompt("Escribe otro numero, el que has puesto era mas grande");
    contador++;
}
if (contador > 3){
    document.writeln("Has perdido el juego");
} else {
    document.writeln("Has adivinado el numero en " + contador + " intentos")
}
