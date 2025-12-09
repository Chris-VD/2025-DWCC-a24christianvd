const rawURL = "https://nekos.best/api/v2/"
let form = document.querySelector("form")
let btn = document.querySelector("#btn")
let div = document.querySelector("div")

fetch(rawURL+"endpoints")
    .then((r)=>r.json())
    .then((d)=> {
        let endpoints = Object.keys(d)
        let select = document.createElement("select")
        select.id = "type"
        for (endpoint of endpoints){
            let option = document.createElement("option")
            option.value = endpoint
            option.append(endpoint)
            select.append(option)
        }
        form.prepend(select)
    })

btn.addEventListener("click", (event)=>{
    event.preventDefault()
    div.innerHTML = ""
    let type = document.querySelector("#type").value
    let amm = document.querySelector("#amm").value
    fetch(rawURL+type+"?amount="+amm)
        .then((r)=>r.json())
        .then((d)=>{
            let ul = document.createElement("ul")
            for (raw of d.results){
                let li = document.createElement("li")
                console.log(raw);
                let name = document.createElement("h2")
                let a = document.createElement("a")
                a.append(raw.artist_name)
                a.href = raw.artist_href
                name.append("Artist: ", a)
                let img = document.createElement("img")
                img.src = raw.url
                img.style = "width: 100px"
                let source = document.createElement("a")
                source.append("Source URL")
                source.href=raw.source_url
                li.append(name, img, document.createElement("br"), source)
                ul.append(li)
            }
            div.append(ul)
        })    
})
