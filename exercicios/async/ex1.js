const main = document.querySelector("#main")
let xml = new XMLHttpRequest();
xml.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json")
xml.responseType = "json"
xml.send()

xml.addEventListener("load", ()=>{
    let obx = xml.response
    let gatiñosP = document.createElement("p");
    let nomes = document.createElement("p");
    let gatiños = {}
    for (kitty of obx){
        if (obx[obx.length-1].name == kitty.name){
            nomes.innerText = nomes.innerText.slice(0, -2)
            nomes.append(" e " + kitty.name)
        } else nomes.append(kitty.name + ", ")
        if (kitty?.kittens){
            for (kitten of kitty.kittens){
                gatiños[kitten.gender] != undefined ? gatiños[kitten.gender] = gatiños[kitten.gender] + 1 : gatiños[kitten.gender] = 1
            }
        }
    }
    gatiñosP.append("Hay "+String(gatiños.m+gatiños.f)+" gatiños: "+gatiños.f+" femias e "+gatiños.m+" machos.")
    main.append(nomes)
    main.append(gatiñosP)
})