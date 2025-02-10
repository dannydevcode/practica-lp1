let nombre = prompt("Ingrese nombre");
let apellido = prompt("Ingrese apellido");
let cedula = prompt("Ingrese Cedula");

let datos = {}

datos.nombre = nombre;
datos.apellido = apellido;
datos.cedula = cedula;

datos.listaFrutas = ['manzana', 'banana', 'pera'];
datos.listaVerduras = ["tomate", "locote", "cebolla"];

console.log(datos);

let listaFrutas = datos.listaFrutas;
console.log(listaFrutas);

let listaVerduras = datos.listaVerduras;
console.log(listaVerduras);

listaVerduras.pop();
console.log(listaVerduras);

listaFrutas.shift();
console.log(listaFrutas);

