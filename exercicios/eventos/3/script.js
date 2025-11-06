let list = document.querySelector("ul")
console.log(list);
list.addEventListener("click", (event)=>{
    let curr = event.target
    if (Array.from(curr.children[0]?.classList).includes("hidden")) curr.children[0]?.classList.remove("hidden")
    else curr.children[0]?.classList.add("hidden")
})

