// 1. ¿Cal é o resultado do seguinte código? ¿Por que?
let promise = new Promise(function(resolve, reject) {
resolve(1);
setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);
// cando se crea a promesa, execútase e devolve un 1, móstrase por pantalla e deixa de executarse polo que nonca chega a resolver o 2

// 2. Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A
// promesa debe resolverse despois de tres segundos dende que se chamou á función
// e debe devolver o parámetro pasado á función.
// Para probala, fai unha chamada á túa función e mostra por consola o valor devolto
// pola promesa.
function proba(valor){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(valor), 3000);
    })
}
proba(5).then((result)=>console.log(result))

// 3. Crea unha función que reciba un parámetro e devolva unha promesa.
// a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
// devolver un Erro indicando “Erro. O parámetro non é un número”.
// b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
// segundo e devolver “Impar”.
// c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
// segundos e devolver un erro co texto “Par”.
function numeros(valor){
    return new Promise((resolve, reject)=>{
        if (typeof valor != "number") reject(new Error("Erro. O parámetro non é un número."));
        if (valor%2 == 0) setTimeout(()=>resolve("Par"), 2000)
        else setTimeout(()=>reject(new Error("Impar")), 1000)
    })
}
numeros("a").then(console.log, console.log)
numeros(2).then(console.log, console.log)
numeros(1).then(console.log, console.log)

