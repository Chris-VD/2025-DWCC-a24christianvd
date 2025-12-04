let inp = document.querySelector("#form").querySelector("input");
let button = document.getElementById("btn");
let noIDURL = "https://jsonplaceholder.typicode.com/users/";
let posts = document.querySelector("#posts")

console.log(button);


button.addEventListener("click", (event)=>{
    event.preventDefault()
    let url = noIDURL+String(inp.value)+"/posts"
    fetch(url)
        .then((response)=>response.json())
        .then((data)=> displayInfo(data))
})

function displayInfo(arr){
    posts.innerHTML = ""
    for (post of arr){
        let id = document.createElement("span")
        id.append(post.id)
        let title = document.createElement("h1")
        title.append(post.title)
        let body = document.createElement("p")
        body.append(post.body)
        posts.append(title, id, body, document.createElement("br"))
    }
}