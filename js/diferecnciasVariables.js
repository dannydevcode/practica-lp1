//var let const 
// ambito / contexto - scope limites de las variables creadas 
//var tiene alcance dentro de las funciones donde se declara
//let tiene alcance solo dentro de la funcion donde se declaro y respeta esa regla var no
//const es una variable inmutable, no puede cambiar su valor 

//var 
function ejemploVar() {
    if(true) {
        var numero = 98;
    }
    console.log(numero)
}

//ejemplo let
function ejemploLet() {
    if(true) {
        let numero = 98;
    }
    console.log(numero)
}

//ejemplo const
function ejemploConst() {
    if(true) {
        const a = 1;
        a = 2;
    }
    console.log(a)
}

const array = [1, 2, 3];
array.push(8);
console.log(array);
//array [] -> permite asignacion de datos pero no eliminacion de los datos inicializados


ejemploVar();
ejemploLet();
ejemploConst();
/*
const miFuncion =()=> {
    console.log("prueba");
}

miFuncion();
*/