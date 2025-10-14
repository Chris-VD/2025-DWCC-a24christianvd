let arrayNotes = [2.3, 5, 7, 9, 5.4, 4.8]
let result = arrayNotes.filter((nota) => nota >= 5);
console.log(result);

const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];
function reductor(total, curr, ind){
    if (total.price) total = total.price;
    let returns = total + curr.price;
    console.log(`Total: ${total}, Current: ${curr.price}, Index: ${ind}, Result: ${returns}`);
    return returns;
}
console.log(objects.reduce(reductor));


let nums = [2,6,3,1,6,2,3,-1]
function mins(min, curr, index){
    let returns = min
    if (curr < min) returns = curr;
    console.log(`Min: ${min}, Current: ${curr}, Index: ${index}, Result: ${returns}`);
    return returns;
}
console.log(nums.reduce(mins));

const persoas = [
{ nome: 'aaron', idade: 65, id: 1 },
{ nome: 'beth', idade: 2, id: 2 },
{ nome: 'ánxeles', idade: 13, id: 3 },
{ nome: 'daniel', idade: 3, id: 4 },
{ nome: 'ada', idade: 25, id: 5 },
{ nome: 'erea', idade: 1, id: 6 },
{ nome: 'navia', idade: 43, id: 7 },
];
let maiores = persoas.filter((per) => per.idade>=18)
console.log(maiores);
let nomes = persoas.map((per) => per.nome)
console.log(nomes);
let nomesMaiMaio = persoas.filter((per) => per.idade>=18).map((per) => per.nome.toUpperCase())
console.log(nomesMaiMaio);
let nomId = persoas.map((per) => {return {id: per.id, nome: per.nome}})
console.log(nomId);

let dias = ["luns", "martes", "mercores", "xoves", "venres", "sábado", "domingo"]
let comM = dias.filter((dia) => dia[0] == "m")
console.log(comM);
console.log(dias.some((dia) => dia[0] == "s"));
console.log(dias.every((dia) => dia[0] == "s"));
console.log(dias.find((dia) => dia[0] == "m"));
console.log(dias.findIndex((dia) => dia[0] == "m"));
let diasMaiu = dias.map(dia => dia.toUpperCase());
console.log(diasMaiu);

let notas = [4,8,4,3,10,5];
let notasOrd = notas.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
console.log(notasOrd);

function maxs(min, curr, index){
    let returns = min
    if (curr > min) returns = curr;
    //console.log(`Min: ${min}, Current: ${curr}, Index: ${index}, Result: ${returns}`);
    return returns;
}
console.log(notas.reduce(maxs));

const inventors = [
{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
{ first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
let inventorsDS = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600)
console.log(inventorsDS);
let nomeCompleto = inventors.map(inventor => inventor.first+" "+inventor.last);
console.log(nomeCompleto);
let nomeComOrd = nomeCompleto.sort((a,b) => {
    let La = a.split(" ")[1]
    let Lb = b.split(" ")[1]
    if (La > Lb) return 1;
    if (La < Lb) return -1;
    return 0
})
console.log(nomeComOrd);
let nomeOrd = inventors.sort((a,b)=>{
    let La = a.last;
    let Lb = b.last;
    if (La > Lb) return 1;
    if (La < Lb) return -1;
    return 0
})
console.log(nomeOrd);
let inventNace = inventors.sort((a,b)=>{
    let La = a.year;
    let Lb = b.year;
    if (La > Lb) return 1;
    if (La < Lb) return -1;
    return 0
})
console.log(inventNace);
let tot = inventors.reduce(((acc, curr)=>acc += curr.year), 0)
console.log(tot);
let invMaisViviu = inventors.sort((a,b)=>{
    let La = a.passed-a.year;
    let Lb = b.passed-b.year;
    if (La > Lb) return 1;
    if (La < Lb) return -1;
    return 0
}).reverse()
console.log(invMaisViviu);

const data = [
"car",
"car",
"truck",
"truck",
"bike",
"walk",
"car",
"van",
"bike",
"walk",
"car",
"van",
"car",
"truck",
"pogostick",
];
let res = data.reduce((obj, curr)=>{
    obj[curr] ? obj[curr]++ :obj[curr] = 1
    return obj;
}, {})
console.log(res);
