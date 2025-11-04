function crearCalendario(elemento, ano, mes){
    let data = new Date(ano, mes-1, 1)
    let table = document.createElement("table")
    let tr = document.createElement("tr");
    let daysW = ["L", "M", "Me", "X", "V", "S", "D"]
    for (let x = 0; x <= 6; x++){
        let th = document.createElement("th")
        th.append(daysW[x])
        tr.append(th)
    }
    table.append(tr)
    elemento.after(table)
}

crearCalendario(document.querySelector("#erm") ,2025, 10)