const diasSemana = ["Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado", "Domingo"];
let dia = diasSemana[6];

function eDiaLaboral(dia){
    if (dia != diasSemana[5] && dia != diasSemana[6]) console.log("O día seleccionado é laboral.");
    else console.log("O día seleccionado non é laboral.");
}

eDiaLaboral(dia);

let n1 = 3;
let n2 = 7;
let n3 = 1;

function mostrarMaior(lista){
    if (lista[0] >= lista[1] && lista[0] >= lista[2]){
        return lista[0];
    }
    else if (lista[1] >= lista[0] && lista[1] > lista[2]){
        return lista[1];
    }
    else {
        return lista[2];
    }
}

console.log(mostrarMaior([n1,n2,n3]));

function pares(top){
    for (index = 0; index <= top; index = index + 2){
        console.log(index);
    }
}

pares(30);

function potencias(top){
    for (index = 0; index <= top; index++){
        console.log("2 elevado a "+index+" = "+(2**index));
    }
}

potencias(20);

function factorial(num){
    let total = 1;
    for(index = 1; index <= num; index++){
        total *= index;
    }
    console.log(total);
}

let num = 6;

factorial(num)

const p1 = {
    peso: 70,
    altura: 1.80
}
const p2 = {
    peso: 80,
    altura: 1.60 
}

function imc(peso, altura){
    return peso / (altura ** 2);
}

function imcMaior(n1, n2){
    if (n1 > n2) {
        console.log("O IMC ("+n1+") da primeira persoa é maior que o da segunda persoa ("+n2+")!");
    }
    else{
        console.log("O IMC ("+n2+") da segunda persoa é maior que o da primeira persoa ("+n1+")!");
    }
}

imcMaior(imc(p1.peso, p1.altura), imc(p2.peso, p2.altura))