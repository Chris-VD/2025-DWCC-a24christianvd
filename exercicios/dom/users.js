console.log(document.querySelector("body").childNodes[1]);
console.log(document.querySelector("body").childNodes[3]);
console.log(document.querySelector("body").childNodes[3].childNodes[3]);

//Si, lastChild pilla o último NODO, e este non vai ter un nextSibling
//Non, child[0] pilla o primeiro ELEMENTO e previousSibling pilla o NODO anterior, polo que pode que non sexa null

function diagonal(){
    let filas = document.querySelector("tbody").children;  
    for (let x = 0; x<=filas.length-1; x++) {               
        for (let y = 0; y<=filas[x].children.length-1;y++) {
            if (x == y) {
                let td = filas[x].children[y];
                td.setAttribute("style", "background-color:red")
            }
        }
    } 
}

//document.querySelector("h2").innerHTML = "<img src=\"erm.jpeg\"></img>"