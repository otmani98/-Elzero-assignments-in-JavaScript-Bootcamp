
//assign01
console.log(10 * 20 * 15 * 3 * 190 * 10 % 400); // 0



//assign02
let num = 3;

// Solution One
console.log(++num + +true + +true); // 6

// Solution Two
console.log(-num * (-true + -true) - true - true); // 6

// Soultion Three
console.log(++num + true); // 6

// Soultion Four
console.log(++num); // 6

// Solution Five
console.log(num); // 6

// Solution Six
console.log(num - false); // 6



//assign03
let num3 = "10";

// Solution One
console.log(+num3 + +num3); // 20

// Solution two
console.log(+num3++ * (+true + true)); // 20

// Solution three
console.log(+num3 * (+true + true) - true - true); // 20

// Solution four
console.log(--num3 + num3); // 20



//assign03
let points = 10;

// Write Your Code Here
points += +true + true + true;

console.log(points); // 13

// Write Your Code Here
points--;
points--;
points += -true - true - true;

console.log(points); // 8;