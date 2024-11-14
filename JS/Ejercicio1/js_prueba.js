alert("Hola mundo")
//Pida por teclado un numero entero (la edad) al usuario
//Declaramos la variable edad
var edad;
//Pedir por promt la edad, ahora edad tendra
//el valor que el usuario haya escrito
edad = prompt("Escriba su edad:");
var nombre;
nombre = prompt("Ahora escriba su nombre")
alert("Su nombre es " + nombre + " y su edad es " + edad)
// Sacar por pantalla la edad que tendra el usuario dentro de 3 años
// ojo edad es una variable de tipo cadena por que el prompt devuelve 
// Todo en tipo cadena
// Tengo que convertilo todo a entero para poder trabajar con operaciones aricmeticas
edad = parseInt(edad) + 3;
alert("Su edad dentro de tres años sera ... " + edad);
