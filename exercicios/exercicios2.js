const cadea = 'desenvolvemento web';
function maiu(str){
    return str.at(0).toUpperCase() + str.substring(1);
}
console.log(maiu(cadea)); // 'Desenvolvemento web'

// function reverseString(str){
//     let newStr = "";
//     for (let x = 1; x <= str.length; x++){
//         newStr += str.at(-x)
//     }
//     return newStr;
// }
function reverseString(str){
    let newStr = "";
    for (let x = str.length-1; x >= 0; x--){
        newStr += str.at(x);
    }
    return newStr;
}
console.log(reverseString("I am a string")) // gnirts a ma I

function enmascarar(num){
    if (Number(num) == NaN) return 0;
    let newNum = "";
    let newN = "";
    for (let x = 1; x <= num.length; x++){
        if (x<=4) newN = num.at(-x)
        else newN = "*";
        newNum = newN + newNum;
    }
    return newNum
}
console.log(enmascarar("1234123412347777")); // ************7777

function numLength(num){
    return String(num).length;
}
let num = 12345;
console.log(numLength(num));


console.log(Math.floor(Math.random() * 4)); // Pódese facer con Math.ceil(Math.random() * 3) pero así é complicado que saia 0
console.log(Math.floor(Math.random() * 3 + 1));

function numeroAleatorio(x ,y){
    return Math.floor(Math.random() * (y-x+1) + x);
    /**
     * En Math.floor(Math.random() * i + j), i será o número de números que xerará (se i = 6, xéranse 6 números [0, 1, 2, 3, 4, 5])
     * e j será o primeiro número dos posibles (se j = 5, pasaría a ser [0+5, 1+5, 2+5... n+5] -> [5, 6, 7, 8, 9, 10] <- Posibles números)
    */
}
console.log(numeroAleatorio(5, 10));

function minAHora(min){
    let hora = Math.trunc(min/60);
    let minuto = (min%60);
    return [hora, minuto];
}
let minutos = 150;
let tempo = minAHora(minutos);
console.log(minutos+" minutos son "+tempo[0]+" horas e "+tempo[1]+" minutos");

function radioToArea(radio){
    return Math.trunc((Math.PI * Math.pow(radio, 2))*100)/100;
}
function radioToPerimeter(radio){
    return Math.trunc((2 * Math.PI * radio)*100)/100;
}
let radio = 5;
console.log("Área: "+radioToArea(radio)+"\nPerímetro: "+radioToPerimeter(radio));

const dias = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
const data = new Date("2025-7-25")
console.log(dias[data.getDay()]);

function diasDoMes(mes, ano){
    let data = new Date(ano, mes-1, 1);
    let dias = 1;
    while (true){
        if (data.getMonth() != mes-1) break;
        dias += 1;
        data = new Date(ano, mes-1, dias);
    }
    return dias-1;
}
console.log(diasDoMes(2, 2024));

function finDeSemana(data){
    return (data.getDay() == 0 || data.getDay() == 6)
}
console.log(finDeSemana(new Date()), finDeSemana(new Date("2025-10-4")));

function diasDendeAN(data){
    let dias = 0;
    let ndata = new Date("2025-1-1")
    while (true){
        dias++;
        ndata = new Date(2025, 0, dias);
        if (ndata.getMonth() == data.getMonth() && ndata.getDate() == data.getDate()) break;
    }
    return dias;
}
console.log(diasDendeAN(new Date()), diasDendeAN(new Date(2025,11,31)));

function indices(num, arr){
    let res = [];
    while (true){
        let newn = arr.indexOf(num);
        arr[newn] = undefined;
        if (newn == -1) break;
        res.push(newn)
    }
    return res;
}
const arr = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(indices(1, arr));

function arrToList(arr){
    let res = "";
    for (element of arr){
        res += element +", ";
    }
    return res.slice(0, -2);
}
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
console.log(arrToList(froitas));
froitas.splice(1,1); // Elimina as mazás
console.log(arrToList(froitas));
froitas.splice(2, 0, "laranxas", "sandías"); // E ngade laranxas e sandía detrás dos plátanos
console.log(arrToList(froitas));
froitas.splice(1, 1, "cereixas", "nésperas"); // Quita os kiwis e pon no seu lugar cereixas e nésperas.
console.log(arrToList(froitas));

function primeiraMaiu(str){
    let arr = str.split(" ");
    let sol = [];
    for (palabra of arr){
        sol.push(maiu(palabra));
    }
    return sol.join(" ");
}
console.log(primeiraMaiu("ola que tal"));

