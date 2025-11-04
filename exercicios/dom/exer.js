console.log(document.getElementById("age-table"));
console.log(document.getElementById("age-table").getElementsByTagName("label"));
console.log(document.getElementById("age-table").querySelector("td"));
console.log(document.getElementsByTagName("form").search);
console.log(document.getElementsByTagName("form").search.querySelector("input"));
console.log(document.getElementsByTagName("form").search.querySelector("input"));
let form = document.getElementsByTagName("form").search.querySelectorAll("input");
console.log(form[form.length-1]);

console.log(document.getElementById("input2"));
console.log(document.querySelectorAll("p"));
console.log(document.getElementById("lipsum").querySelectorAll("p"));
console.log(document.querySelector("form"));
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByTagName("input").sexo);
console.log(document.getElementsByClassName("important"));

// users.js

console.log(document.querySelector("form").querySelectorAll("label")[3].innerHTML);
console.log(document.querySelector("form").querySelectorAll("label")[3].innerText);
console.log(document.querySelector("form").querySelectorAll("label")[3].textContent);

console.log(document.querySelector("form").querySelectorAll("label")[3].querySelector("input").value);
let inputs = document.querySelector("form").querySelectorAll("label")[3].querySelectorAll("input");
for (input of inputs){
    if(input.checked){
        console.log(input.value);
    }
}

let lis = document.querySelectorAll("li");
let total = 0;
for(li of lis){
    console.log(li.textContent);
    total += 1
}
console.log(total);
