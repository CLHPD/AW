var hermanos
var cantidad
cantidad = parseInt(cantidad);
hermanos = parseInt(hermanos);
hermanos = prompt("Cuantos hermanos tienes:");
cantidad = prompt("Ingrese una cantidad:");
if (hermanos > 3){
    alert("Se aplica 15% = " + (cantidad - (cantidad * 15 /100)));
} else if (hermanos >= 1){
    alert("Se aplica 5% = " + (cantidad - (cantidad * 5 /100)));
} else {
    alert("No se aplica nada = " + cantidad);
}