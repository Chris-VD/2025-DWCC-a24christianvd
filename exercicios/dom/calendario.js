const weekDays = ["D", "L", "M", "Me", "X", "V", "S"]
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
    for (let x = 1; x <= new Date(ano, mes-1, 0).getDate(); x){
        let tr = document.createElement("tr");
        for (let y = 0; y <= 6; y++){
            let td = document.createElement("td");
            if (daysW[y] == weekDays[data.getDay()]){
                td.append(x);
                data.setDate(data.getDate()+1);
                x++;
                if (x > new Date(ano, mes-1, 0).getDate()) break;
            } else{
                td.append("");
            }
            tr.append(td)
        }
        table.append(tr);
    }
    elemento.after(table)
}

crearCalendario(document.querySelector("#erm") ,2022, 11)