// 1. ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro
// en f1?
// promise.then(f1).catch(f2);
// promise.then(f1, f2);
// na primeira, se se produce un erro en f1, poderase pillar con un catch, polo que o catch colle os erros da promesa e do f1
// na segunda, f2 namais se executa se hai erros na promesa, se o erro é en f1 non se executará

// 2. ¿Cal é a saída do seguinte código? ¿Por que?
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(() => console.log("Success 1"))
  .then(() => console.log("Success 2"))
  .then(() => console.log("Success 3"))
  .catch(() => console.log("Error 1"))
  .then(() => console.log("Success 4"));
// "Error 1", xa que todos os thens de antes namais están recollendo os resolves, e non hai ningún
// mentres que o catch pillará todos os rejects, e como so hai rejects na función este é o que se executará
// o catch devolve outra promesa distinta que non ten o reject, polo que execútase o seguinte then e imprímese
// "Success 4"

// 3. ¿Cal é a saída do seguinte código? ¿Por que?
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise2 = job(true);
promise2
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch((error) => console.log(error));
// "success", "error", "Error caught"
// o primeiro job é true polo que se imprime por pantalla na liña 37, este then devolve outro job que é false e o catch da 40
// píllao e imprime impríme erro na liña 41, este catch devolve un string polo que o seguinte then da liña 44 recolle ese string e imprímeo
// na liña 45, este then devolve outro job true e como namais hai un catch non se executa, xa que solo se executaría se o job fora false (rejected en vez de resolved)
