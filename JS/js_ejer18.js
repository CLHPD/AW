var mes
mes = prompt("Escriba un mes:");
if (mes == "abril" || mes == "junio" || mes == "junio" || mes == "septiembre" || mes == "noviembre"){
    alert("Ese mes tiene 30 dias");
} else if (mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre"){
    alert("Ese mes tiene 31 dias");
} else if(mes == "febrero"){
    alert("Ese mes tiene 28 o 29 dias");
} else {
    alert("Escriba el nombre de un mes en minusculas");
}