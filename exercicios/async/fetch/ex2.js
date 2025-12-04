let button = document.querySelector("#btn");
let inp = document.querySelector("form").querySelector("input");
let section = document.querySelector("#erm");
let rawURL = "https://jsonplaceholder.typicode.com/todos?_limit=10";
let rawURLSimple = "https://jsonplaceholder.typicode.com/todos/";
let max = 11;

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inp.value);
    let options = {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            id: max++,
            title: inp.value,
            completed: false,
        }),
        headers: {
            "Content-Type": "applications/json",
        },
    };
    fetch(rawURL, options)
        .then((response)=>console.log(response))
    addTask(JSON.parse(options.body));
});

section.addEventListener("click", (event) => {
    if (event.target.tagName == "SPAN") {
        let div = event.target.closest("div");
        fetch(rawURLSimple + div.querySelector("span").innerText, {method:"DELETE"})
            .then((response)=>console.log(response));
        div.remove()
    }
    else {
        let div = event.target.closest("div");
        div.classList.toggle("completed");
        let completed;
        div.classList[0] ? completed = true : completed = false;
        let options = {
            method: "PATCH",
            body: JSON.stringify({
                completed: completed,
            }),
            headers: {
                "Content-type": "application/json",
            },
        };
        fetch(rawURLSimple + div.querySelector("span").innerText, options)
            .then((response)=>console.log(response));
    }
});



function addTask(options) {
    let div = document.createElement("div");
    div.style = "border: 2px solid black";
    if (options.completed) div.classList.add("completed");
    let title = document.createElement("h2");
    let id = document.createElement("span");
    id.append(options.id);
    id.classList.add("hidden");
    title.append(options.title);
    div.append(title);
    div.append(id);
    let cross = document.createElement("span")
    cross.append("X")
    div.append(cross)
    section.append(div);
}

function addTasks(list) {
    for (task of list) addTask(task);
}

fetch(rawURL)
    .then((response) => response.json())
    .then((data) => addTasks(data));
