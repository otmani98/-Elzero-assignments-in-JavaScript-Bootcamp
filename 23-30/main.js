//numbers

//assign01

// Your Solutions
console.log(100000); // 100000
console.log(1_00_000); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(99999 + true); // 100000
console.log(100000 * true); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000")); // 100000
console.log(1e6 - 9e5);
console.log(Math.trunc(100000.99999));
console.log(1000000 / 10);


//assign02
console.log(-Number.MIN_SAFE_INTEGER);


//assign03
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16


//assign04
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//assign05

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//assign06

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(+parseInt(flt)); // 10

//assign07
//random number in range 0 4
console.log(Math.floor(Math.random() * (4 - 0 + 1)) + 0);



//strings

//assign01
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[userName.indexOf("E")].toLowerCase().repeat(3)); // eee

//assign02
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True