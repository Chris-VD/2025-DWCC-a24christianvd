'use strict';

// Engade un event listener ao botón con id "btnAccion" que mostre un alert ao facer click
document.querySelector("#btnAccion").addEventListener("click", () => alert("Erm"))

// Cada vez que se fai click no botón "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".
document.querySelector("#btnAlternar").addEventListener("click", (event) => {
    if(!document.querySelector("#mensaxe").classList.length) document.querySelector("#mensaxe").classList.add("resaltado");
    else document.querySelector("#mensaxe").classList.remove("resaltado")
})

// Mostra por consola o valor do input cando se envía o formulario
let button = document.querySelector("form").querySelector("button");
button.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(document.querySelector("#entradaTexto").value);
})
