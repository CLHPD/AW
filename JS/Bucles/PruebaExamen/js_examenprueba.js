var suma = 0;
var numero;

while (true) {
  numero = prompt("Ingresa el precio de articulo (o 0 para terminar):");
  numero = parseFloat(numero);
  if (numero === 0) {
    break;
  }
  if (isNaN(numero) || numero < 0) {
    alert("Por favor ingresa un número válido y positivo.");
    continue;
  }
  suma += numero;
}
alert("La suma de los números es: " + suma);