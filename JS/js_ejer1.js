var numero;
numero = prompt("Escriba un numero");

if (isNaN(numero)){
    document.writeln("Porfavor intrdoduzca un numero");
}
else if ((numero % 2) == 0){
    document.writeln("El numero es par");
}
else{
    document.writeln("El numero es impar");
}