//querySelector

const heading = document.querySelector(".header__texto h2"); //0 a 1 elementos
heading.textContent = "Nuevo Heading";
console.log(heading);

//querySelectorAll// retorna 0

const enlaces = document.querySelectorAll(".navegacion a ");
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");

//getElementById

const heading2 = document.getElementById("heading");
console.log(heading2);

//GENERAR UN NUEVO ENLACER

const nuevoEnlace = document.createElement("A");

//Agregar el href
nuevoEnlace.href = "nosotros.html";

//Agregar el texto

nuevoEnlace.textContent = "Nosotros";

//Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregar al Documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//EVENTOS

console.log(1);
window.addEventListener("load", imprimir);
//load espera a que el js y los archivos que dependen del HTML estén listos

window.onload = function () {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  // solo espera que descarge el HTML, pero no espera al css o imagenes
  console.log(4);
});

console.log(5);

function imprimir() {
  console.log(2);
}

window.onscroll = function () {
  console.log("scrolling... ");
};
