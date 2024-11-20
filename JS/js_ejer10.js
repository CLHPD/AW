var estudios
var edad
estudios = prompt("Escriba en que ciudad estudia:")
edad = prompt("Escriba su edad:")
if (edad > 15 && edad < 18 && estudios == "zaragoza"){
    alert("Puedes acceder a la Universidad de Zaragoza");
} else {
    alert("No puedes acceder a la universidad de zaragoza")
}