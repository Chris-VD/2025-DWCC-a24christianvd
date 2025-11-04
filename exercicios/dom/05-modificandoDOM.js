'use strict';

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal" 
document.querySelector("#tituloPrincipal").classList.add("color-title")

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada
let li = document.createElement("li")
li.textContent = "Item 5"
li.classList.add("item-lista")
document.querySelector("ul").append(li)

// Modifica o ancho do div con id "contedor" a 800px usando JavaScript 
document.querySelector("#contedor").setAttribute("style", "widht: 800px")

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..." 
document.querySelector("#entradaTexto").setAttribute("placeholder", "Escribe aquí...")

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px
document.querySelector("#lista").setAttribute("style", "font-size: 18px")

// Elimina o segundo elemento da lista (Item 2)
document.querySelector("#lista").firstElementChild.nextElementSibling.remove()

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe" 
document.querySelector("#mensaxe").insertAdjacentHTML("afterend", "<p>Texto dinámico</p>")
