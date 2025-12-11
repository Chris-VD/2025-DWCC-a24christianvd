let taboa = document.querySelector("#taboa")
let infoP = document.querySelector("#info")
let inpt = document.querySelector("#nome")

async function getMunicipios(){
    return (await fetch("15-municipiosCoruna.json")).json()
}
async function getMunicipioInfo(nome){
    return getMunicipios().then((d)=>{
        for (mun of d){
            if (mun.Denominación == nome){
                return mun
            }
        }
        return false
    })
}

function showInfo(info){
    let inf = `${info.Denominación}, cod ${info["Codigo Municipio"]}, ${info.Provincia} (cod ${info["Codigo Provincia"]}), ${info["Comunidad Autónoma"]} (cod ${info["Código de CA"]}), con capital en ${info.Capitalidad}, ${info.Habitantes} habitantes e superficie de ${info.Superficie} (densidade de ${info.Densidad}). Inscrita o ${info["Fecha de inscripción"]}, con código ${info["Número de inscripción"]}`;
    infoP.innerText = inf
}

function showMunicipios(municipios, filter=""){
    taboa.innerHTML = "<tr><th>Nome</th><th>Habitantes</th><th>Superficie</th><th>Capital</th></tr>"
    for (municipio of municipios){        
        let tr = document.createElement("tr")
        let nome = document.createElement("td")
        let habitantes = document.createElement("td")
        let superficie = document.createElement("td")
        let capital = document.createElement("td")
        
        nome.append(municipio.Denominación)
        habitantes.append(municipio.Habitantes)
        superficie.append(municipio.Superficie)
        capital.append(municipio.Capitalidad)

        if (municipio.Denominación.toLowerCase().startsWith(filter)){
            tr.append(nome, habitantes, superficie, capital)
            taboa.append(tr)
        }
    }
}

inpt.addEventListener("keyup", ()=>{
    console.log(inpt.value);
    taboa.innerHTML = ""
    getMunicipios().then((d)=>showMunicipios(d, inpt.value.toLowerCase()))
})

taboa.addEventListener("click", (event)=>{
    let inf = getMunicipioInfo(event.target.closest("tr").querySelector("td").innerHTML)
    inf.then((d)=>showInfo(d))
})

getMunicipios().then((d)=>showMunicipios(d))
