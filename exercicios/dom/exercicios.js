// 1.
// a == c

// 2.
let lista = document.querySelectorAll("ol");
for (li of lista) {
  li.remove();
}

// 3.
// let taboa = document.getElementById("taboa");
// taboa.remove()
// Porque "Texto" non está realmente dentro da táboa, podemos velo inspeccionando o elemento

// 4.
let ul = document.querySelector("ul");
for (let x = 1; x <= 4; x++) {
  li = document.createElement("li");
  li.innerHTML = x;
  ul.append(li);
}

// 5.
document
  .querySelector("#listaULExercicio5")
  .firstElementChild.insertAdjacentHTML("afterend", "<li>2</li><li>3</li");

// 6.
//

// 7.
// arbore.js

// 8.
// calendario.js

// 9.
// taboa.js

// 10.
// lista.js
