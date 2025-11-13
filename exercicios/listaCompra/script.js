const elementToAdd = document.querySelector("#introElement")
const introElement = document.querySelector("#introElementBut")
const itemList = document.querySelector("#itemList")
const borrarTodoBut = document.querySelector("#borrarTodo")
const filterInput = document.querySelector("#filterItem")
const letterList = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM"
let elementList = []

introElement.addEventListener("click", (e) => {
    if (elementToAdd.value != "" & !elementList.includes(elementToAdd.value)) {
        elementList.push(elementToAdd.value);
        let nu = document.createElement("li");
        let nuItem = document.createElement("span")
        nuItem.append(elementToAdd.value)
        nuItem.classList.add("itemText")
        nu.append(nuItem);
        nu.classList.add("item")
        let cross = document.createElement("span");
        cross.append("X")
        cross.classList.add("cross")
        nu.append(cross)
        itemList.append(nu);
        elementToAdd.value = ""
    }
    else alert("Non se engadiu nada!");
    refresh()
})

elementToAdd.addEventListener("keydown", (event)=> {if (event.key == "Enter") introElement.click()})

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
    if (window.confirm("Seguro que quere eleminalo todo?")) {
        // Array.from(itemList.querySelectorAll("li")).map((ili)=>ili.remove())
        itemList.querySelectorAll("li").forEach((li)=>li.remove())
        elementList = []
    }
    refresh()
})

filterInput.addEventListener("keyup", (event)=>{
    let re = RegExp(filterInput.value)
    itemList.querySelectorAll("li").forEach((li)=>{
        if (!re.test(li.innerText))
            li.classList.add("hidden")
        else
            li.classList.remove("hidden")
    })
    refresh(filterInput.value !== "")
})

function refresh(force){ 
    let list = itemList.querySelectorAll("li")    
    if(list.length > 0) borrarTodoBut.classList.remove("hidden")
    else borrarTodoBut.classList.add("hidden")
    if (force) borrarTodoBut.classList.add("hidden")
}
