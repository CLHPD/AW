var numero
numero = prompt("Escriba un numero")
if (numero > 100){
    var descuento15 = numero - (numero * 15 / 100);
    document.writeln("El numero con descuento del 15% es " + descuento15);
} else if (numero >=50) {
    var descuento5 = numero - (numero * 5 / 100);
    document.writeln("El numero con descuento del 5% es " + descuento5);
}else {
    document.writeln(" No tienes descuento");
}