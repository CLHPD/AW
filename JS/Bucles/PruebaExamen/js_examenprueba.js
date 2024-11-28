var suma = 0;
var numero;
while (numero != 0) {
  numero = prompt("Ingresa el precio de articulo (o 0 para terminar):");
  numero = parseInt(numero);
  if (isNaN(numero) || numero < 0) {
    alert("Por favor ingresa un número válido y positivo.");
  } else {
    suma = suma + numero;
  }
}
alert("La suma de los precios es: " + suma);