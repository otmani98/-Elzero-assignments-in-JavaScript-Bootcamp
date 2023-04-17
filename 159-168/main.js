//assign01

let myAge = new Date() - new Date("1998-02-17"); //myAge in MilliSecond

console.log(`${(myAge / 1000).toFixed()} Seconds`);
console.log(`${(myAge / 1000 / 60).toFixed()} Minutes`);
console.log(`${(myAge / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(myAge / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`);

//assign02

let setTime = new Date();

setTime.setFullYear(1980, 0, 1);
setTime.setHours(0, 0, 1);

console.log(setTime);

//assign03

let lastDate = new Date();
lastDate.setDate(0);
console.log(lastDate);
console.log(
  `Previous Month Is ${lastDate.toLocaleString("en-us", {
    month: "long",
  })} And Last Day Is ${lastDate.getDate()}`
);

//assign04

//way01
let birthOne = new Date("1998-02-17T00:00:00");
//way02
let birthTwo = new Date();
birthTwo.setFullYear(1998, 1, 17);
birthTwo.setHours(0, 0, 0);
//way03
let birthThree = new Date(1998, 1, 17);

console.log(birthOne);
console.log(birthTwo);
console.log(birthThree);

//assign05

let start = performance.now();

// for (let i = 0; i < 99999; i++) {
//   console.log(i);
// }

let end = performance.now();

console.log(`Loop Took ${(end - start).toFixed()} Milliseconds.`);

//assign06

// Write Your Generator Function Here

function* gen() {
  let result = 14;
  let increasing = 140;

  while (true) {
    yield result;
    result += increasing;
    increasing += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

//assign07

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  yield* new Set([...genNumbers()]);
  yield* new Set([...genLetters()]);
}

let generatore = genAll();

console.log(generatore.next()); // {value: 1, done: false}
console.log(generatore.next()); // {value: 2, done: false}
console.log(generatore.next()); // {value: 3, done: false}
console.log(generatore.next()); // {value: 4, done: false}
console.log(generatore.next()); // {value: 5, done: false}
console.log(generatore.next()); // {value: "A", done: false}
console.log(generatore.next()); // {value: "B", done: false}
console.log(generatore.next()); // {value: "C", done: false}
console.log(generatore.next()); // {value: "D", done: false}

//assign08

import calc from "./mod-one.js";

import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
