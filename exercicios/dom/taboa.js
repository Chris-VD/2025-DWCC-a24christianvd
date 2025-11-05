let rowList = document.querySelector("table").querySelector("tbody").querySelectorAll("tr");
let col = 0;
let ordenado = false;
while (!ordenado){
    ordenado = true;
    for (let x = 0; x <= rowList.length-2; x++){
        rowList = document.querySelector("table").querySelector("tbody").querySelectorAll("tr");
        let r1 = rowList[x];
        let r2 = rowList[x+1];
        if (r1.querySelectorAll("td")[col].textContent > r2.querySelectorAll("td")[col].textContent){
            ordenado = false;
            r2.after(r1);
        }
    }
}
