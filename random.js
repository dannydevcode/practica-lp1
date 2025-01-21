/*
let numeroRandom = Math.random();
console.log(numeroRandom);

let otroNumeroRandom = Math.random() * 100;
console.log(otroNumeroRandom);
*/
let numeroRandom = Math.round((Math.random) * 10);
let numeroIngresado;

do {
    numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"));
    if(numeroRandom != numeroIngresado) {
        alert("Fallaste");
    } else {
        alert("Ganaste");
    }
} while(numeroIngresado != numeroRandom);
