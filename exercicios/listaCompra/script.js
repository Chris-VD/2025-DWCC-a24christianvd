const form = document.querySelector("form")
const elementToAdd = document.querySelector("#introElement")
const introElement = document.querySelector("#introElementBut")
let elementList = []

introElement.addEventListener("click", (e) => {
    e.preventDefault()
    if (elementToAdd.value != "") {
        if (!elementList.includes(elementToAdd.value)) elementList.push(elementToAdd.value);
        console.log(elementList);
    }
    else alert("Non se engadiu nada!");
    
    
})
