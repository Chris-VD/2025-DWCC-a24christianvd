'use strict';

// x &&= y -> x && (x == y)
let x = 0;
let y = 1;
console.log((x &&= 0), x); // x && (x == 0) true -> x -> 0
console.log((x &&= 1), x); // x && (X == 1) false -> x -> 0
console.log((y &&= 1), y); // y && (y == 1) true -> (y == 1) -> 1
console.log((y &&= 0), y); // y && (y == 0) false -> (y == 0) -> 0

x = 0;
y = 1;
console.log((x ||= 0), x); // x || (x == 0) true -> (x == 0) -> 0
console.log((x ||= 1), x); // x || (x == 1) false -> (x == 1) -> 1
console.log((y ||= 1), y); // y || (y == 1) true -> y -> 1
console.log((y ||= 0), y); // y || (y == 0) false -> y -> 1
