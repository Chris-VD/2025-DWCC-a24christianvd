let rand = Math.ceil((Math.random() * 1000) + 1)
let pokeURL = "https://pokeapi.co/api/v2/pokemon/"+String(rand)
fetch(pokeURL)
    .then((response) => response.json())
    .then((data) => show(data))

function show(data){
    let img = document.createElement("img")
    img.src = data.sprites.other.home.front_default
    let name = document.createElement("h2")
    name.append(data.name)
    let abs = document.createElement("ul")
    for (ab of data.abilities){
        console.log(ab);
        let a = document.createElement("a")
        a.href = ab["ability"]["url"]
        a.append(ab["ability"]["name"])
        let li = document.createElement("li")
        li.append(a)
        abs.append(li)
        fetch(ab["ability"]["url"])
            .then((r)=>r.json())
            .then((d)=> {
                let span = document.createElement("span")
                span.append(" - ES: " + d.names[5].name)
                li.append(span)
            })
                
    }
    let section = document.createElement("section")
    section.append(name, img, abs)
    document.querySelector("div").append(section)
}


