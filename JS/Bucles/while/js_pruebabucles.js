var numero;
numero = prompt("Escriba un numero entre 0 y 10");
while(numero < 0 || numero > 10){
    numero = prompt("Escriba otro numero");
}
document.writeln("Su numero es " + numero + "<br>");