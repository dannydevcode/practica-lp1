//zona segura, el script se va a ejecutar luego de que se cargue toda la pagina
document.addEventListener('DOMContentLoaded', function() {
    const frutas = ["frutilla", "pera"];
    const verduras = ["tomate", "zanahoria"];
    frutas.push("banana");
    //con length se puede saber la cantidad de elementos conocidos en un array
    console.log(frutas[1]);
    console.log(frutas.length);
    console.log(frutas[frutas.length - 1]);
    console.log(frutas);
});