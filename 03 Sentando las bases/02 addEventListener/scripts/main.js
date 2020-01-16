'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const mensaje = document.querySelector('.mensaje');
const inputsolucion = document.querySelector('#input-solucion');

function recibirNombre(event) {
  console.log('hola')
  event.preventDefault();
  formulario.textContent = 'Se enviaron los datos';
  formulario.style.color = 'blue';

}


function interceptarNombre(event) {


  const nombre = event.target.value;  
   if(nombre.lenght < 5 || nombre.lenght > 50 ){
   mensaje.textContent = 'Supera la cantidad';
   mensaje.style.color = "green";
   console.log('no es valido'); 
 }else{
   mensaje.textContent='';

    }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
mensaje.addEventListener('span', interceptarNombre); //acá le estoy diciendo que es un evento
