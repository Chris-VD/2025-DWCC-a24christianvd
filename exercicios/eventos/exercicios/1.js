let div = document.createElement("div")
div.style.width = "100px"
div.style.height = "100px"
document.body.prepend(div)

let height = document.querySelector("#labHeight")
let width = document.querySelector("#labWidth")

height.addEventListener("click", (e)=>{
    if(e.target.tagName=="BUTTON"){
        let amm = document.querySelector("#heightInput").value
        div.style.height = amm+"px"
    }
})
width.addEventListener("click", (e)=>{
    if(e.target.tagName=="BUTTON"){
        let amm = document.querySelector("#widthInput").value
        div.style.width = amm+"px"
    }
})
