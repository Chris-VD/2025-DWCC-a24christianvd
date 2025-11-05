let lista = document.querySelector("#listaAnimais");
console.log(lista);
for (li of lista.querySelectorAll("li")){
    let number = li.children[0]?.children.length;
    if (number != undefined) li.childNodes[0].textContent += "["+number+"]";
}
