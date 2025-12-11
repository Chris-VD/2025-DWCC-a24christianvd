async function loadJson(url) {
    await fetch(url).then((response) => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
}
loadJson("https://no-such-user.json").catch(console.log);

async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 10;
}
function imprimirResultado() {
    wait().then((data)=>console.log(data))
}
imprimirResultado();


