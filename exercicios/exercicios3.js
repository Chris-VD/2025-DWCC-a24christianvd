let television = {
    categoría: "televisores",
    unidades: 4,
    prezo: 354.99,
    importe: function (){
        return this.unidades * this.prezo;
    }
}
console.log(television)
console.log(television.importe());

let game = {
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};
let {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

game = {
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
};
let x = 1;
for (goal of game.scored){
    console.log("Gol " +(x++)+": "+goal);
}
let scores = {}
for (goalies of game.scored){    
    if (goalies in scores){
        scores[goalies] += 1;
    } else {
        scores[goalies] = 1;
    }
}
console.log(scores);

const gameEvents = new Map([
[17, "GOAL"],
[36, "Substitution"],
[47, "GOAL"],
[61, "Substitution"],
[64, "Yellow card"],
[69, "Red card"],
[70, "Substitution"],
[72, "Substitution"],
[76, "GOAL"],
[80, "GOAL"],
[92, "Yellow card"],
]);
let eventos = new Set(gameEvents.values());
console.log(eventos);
let parte;
for (let[key, val] of gameEvents){
    if (key <=45) parte = "[PRIMEIRA PARTE]"
    else parte = "[SEGUNDA PARTE]"
    console.log(`${parte} ${key}: ${val}`);
    
}
