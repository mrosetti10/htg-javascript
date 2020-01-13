'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
console.log(event.target.value);
if (nombre.lenght < 5|| nombre.lenght)


  
if (nombre < 5 || nombre>50)
formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
