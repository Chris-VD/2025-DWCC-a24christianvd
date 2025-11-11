const form = document.querySelector("form")
const elementToAdd = document.querySelector("#introElement")
const introElement = document.querySelector("#introElementBut")
const itemList = document.querySelector("#itemList")
const borrarTodoBut = document.querySelector("#borrarTodo")
const filterInput = document.querySelector("#filterItem")
const letterList = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM"
let elementList = []

introElement.addEventListener("click", (e) => {
    e.preventDefault()
    if (elementToAdd.value != "" & !elementList.includes(elementToAdd.value)) {
        elementList.push(elementToAdd.value);
        let nu = document.createElement("li");
        nu.append(elementToAdd.value);
        nu.classList.add("item")
        let cross = document.createElement("aside");
        cross.append("X")
        cross.classList.add("cross")
        nu.append(cross)
        itemList.append(nu);
        elementToAdd.value = ""
    }
    else alert("Non se engadiu nada!");
    refresh()
})

itemList.addEventListener("click", (event)=>{
    let item = event.target.closest(".cross")?.closest(".item")    
    item.querySelector(".cross").remove()
    elementList = elementList.filter((element)=>{
        element != item.innerText;
    })
    item.remove()
    refresh()
})

borrarTodoBut.addEventListener("click", ()=>{
    if (window.confirm()) {
        // Array.from(itemList.querySelectorAll("li")).map((ili)=>ili.remove())
        itemList.querySelectorAll("li").forEach((li)=>li.remove())
        elementList = []
    }
    refresh()
})

filterInput.addEventListener("keydown", (event)=>{
    let nuKey = ""
    let value = filterInput.value
    if(letterList.split("").includes(event.key)) nuKey = event.key
    else if (event.key == "Backspace") value = value.substring(0, value.length-1);
    let re = RegExp(value+nuKey)
    itemList.querySelectorAll("li").forEach((li)=>{
        if (!re.test(li.innerText)) li.classList.add("hidden")
        else li.classList.remove("hidden")
    })
    if (value+nuKey !== "") refresh(true)
    else refresh(false)
})

function refresh(force = null){
    console.log(force);  
    let list = itemList.querySelectorAll("li")    
    if(list.length > 0) borrarTodoBut.classList.remove("hidden")
    else borrarTodoBut.classList.add("hidden")
    if (force) borrarTodoBut.classList.add("hidden")
}
