let cubo = x => x*x*x;
console.log(cubo(3));

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
let numerosImpares = arr => {
    let res = [];
    for (ele of arr) 
        if (ele % 2) res.push(ele);
    return res;
}
console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

let sumar = (...arr) => {
    let res = 0;
    for (el of arr) res += el;
    return res;
}
console.log(sumar(1,2,3,4,5,5));

let media = (...arr) => {
    let res = 0;
    for (el of arr) res += el;
    return res/arr.length;
}
console.log(media(1,2,3,4,5));

let minMax = arr => {
    let min = max = arr[1];
    for (el of arr){
        if (el < min) min = el;
        if (el > max) max = el;
    }
    return {min: min, max: max}
}
console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

let rectangulo = ((l, a) => `A área do rectángulo con largo ${l} e ancho ${a} é ${a*l}`)(2,5);
console.log(rectangulo);

let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let validarDni = dni => letras[parseInt(dni.substring(0,8))%23] == dni[8];
let dni = "45960722Y";
console.log(validarDni(dni));

let monedas = dinero => {
    billetes = {500:0, 200:0, 100:0, 50:0, 20:0, 10:0, 5:0, 2:0, 1:0, 0.5:0, 0.2:0, 0.1:0, 0.05:0, 0.02:0, 0.01:0}
    lista = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    while (dinero >= 0.01){
        for (key of lista){
            if (dinero >= key){
                billetes[key] += 1;
                dinero -= key;
                break;
            }
        }
    }
    // while (true){
    //     if (dinero >= 500) {billetes[500]+=1; dinero-=500;continue;}
    //     else if (dinero >= 200) {billetes[200]+=1; dinero-=200;continue;}
    //     else if (dinero >= 100) {billetes[100]+=1; dinero-=100;continue;}
    //     else if (dinero >= 50) {billetes[50]+=1; dinero-=50;continue;}
    //     else if (dinero >= 20) {billetes[20]+=1; dinero-=20;continue;}
    //     else if (dinero >= 10) {billetes[10]+=1; dinero-=10;continue;}
    //     else if (dinero >= 5) {billetes[5]+=1; dinero-=5;continue;}
    //     else if (dinero >= 2) {billetes[2]+=1; dinero-=2;continue;}
    //     else if (dinero >= 1) {billetes[1]+=1; dinero-=1;continue;}
    //     else if (dinero >= 0.5) {billetes[0.5]+=1; dinero-=0.5;continue;}
    //     else if (dinero >= 0.20) {billetes[0.20]+=1; dinero-=0.20;continue;}
    //     else if (dinero >= 0.10) {billetes[0.10]+=1; dinero-=0.10;continue;}
    //     else if (dinero >= 0.05) {billetes[0.05]+=1; dinero-=0.05;continue;}
    //     else if (dinero >= 0.02) {billetes[0.02]+=1; dinero-=0.02;continue;}
    //     else if (dinero >= 0.01) {billetes[0.01]+=1; dinero-=0.01;continue;}
    //     else break;
    // } // Deus perdona meus pecados
    return billetes;
}
console.log(monedas(436.25));

function buscarPatron (texto, patron){
    text = texto.toUpperCase();
    patron = patron.toUpperCase();
    let encontradas = 0;
    for (let index = 0; index < texto.length; index++) {
        let res = texto.substring(index, index + patron.length);
        if (res === patron) encontradas++;
    }
    return encontradas;
}
console.log(buscarPatron("000111101000ABCHA0", "00"));

const inicioXornada = "07:30";
const finalXornada = "17:45";
function axendarReunion(start, time){
    let [hora, min] = start.split(":");
    let [horaIni, minIni] = inicioXornada.split(":");
    let [horaFin, minFin] = finalXornada.split(":");

    let total = hora*60 + min;
    let totalIni = horaIni*60 + minIni;
    let totalFin = horaFin*60 + minFin;    
    if (Number(total) < Number(totalIni) || Number(total) > Number(totalFin)) return false;
    total = Number(total) + Number(time);
    return !(Number(total) < Number(totalIni) || Number(total) > Number(totalFin));
}
console.assert(axendarReunion("7:00", 15) == false,
'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(axendarReunion("7:15", 30) == false,
'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(axendarReunion("7:30", 30) == true, 
'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(axendarReunion("11:30", 60) == true, 
'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(axendarReunion("17:00", 45) == true, 
'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(axendarReunion("17:30", 30) == false,
'Fallo comprobando axendarReunion("17:30", 30) == false'
);

// arrayEntrada = [[0, 0, -1, 0],
// [0, -1, -1, 0]];
// arraySaida = [[1, 3, -1, 2],
// [1, -1, -1, 2]];
function minas(tab, x, y){
    let found = 0;
    for (let i = -1; i<=1; i++)     
        for (let j = -1; j<=1; j++)
            if (tab[x+i]?.[y+j] === -1) found++; // Precioso
    return found;
}
function parser(tab){
    res = [];
    for(let i = 0; i<=tab.length-1; i++){
        res[i] = [];
        for (let j = 0; j<= tab[i].length-1; j++)          
            if (tab[i][j] == -1) res[i][j] = -1;
            else res[i][j] = minas(tab, i, j);
    }
    return res;
}
console.log(parser(
    [[0, 0, -1, 0],
    [0, -1, -1, 0]]
));
