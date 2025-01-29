
//practicas varias sobre el uso dek DOM 
const elemento = document.getElementById('page');
console.log(elemento);

const contenedor = document.getElementsByClassName('contenedor1');
console.log(contenedor);

const items = document.getElementsByClassName('item');
console.log(items);

console.log(items[1]);
console.log(items.length);

const parrafos = document.getElementsByTagName('p');
console.log(parrafos);

const cambiarColorParrafo = () => {
  const parrafoPrueba = document.getElementById('parrafoPrueba');
  parrafoPrueba.style.color = 'blue';
};

parrafos.innerHTML = '<b>Hola Mundo</b>';

const cambiarTexto = () => {
  const titulo = document.getElementById('titulo');
  titulo.textContent = 'Nuevo texto';
}

const cambiarTexto2 = () => {
  const textoNuevo = document.getElementById('text');
  textoNuevo.textContent = 'Nuevo parrafo';
  textoNuevo.style.color =  'red';
}

const cambiarSubtitulo = () => {
  const subTitulo = document.getElementById('subtitulo');
  subTitulo.textContent = 'Subtitulo modficado';
  subTitulo.style.color = 'blue';
  subTitulo.style.fontSize = '30px';
}


const container = document.getElementById('container');
const btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener('click', () => {
  const div = document.createElement("div");
  div.textContent = 'Nuevo div generado';
  div.style.border = '2px solid red';
  div.style.margin = '10px';
  div.style.padding = '10px';
  div.style.backgroundColor = 'crimson';

  container.appendChild(div);
});

const btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', () => {
  container.removeChild(container.lastChild); 
});

const div2 = document.getElementById('div2');
const agregarDiv2 = () => {
  const div = document.createElement('div');
  div.textContent = 'Div numero 2';
  div2.appendChild(div);
}

