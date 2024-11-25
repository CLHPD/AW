var numero
numero = prompt("Escriba el numero de dias de un mes")
if (isNaN(numero)){
    alert("Debes introducir un numero")
}else if (numero >=28 && numero <= 31){
    alert("30");
}else{
    alert("Ningun mes tiene ese numero de dias");
}