//assign01

let setOfNumbers = new Set().add(10);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log([...setOfNumbers][setOfNumbers.size - 1]);

//assign02

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort());

//assign03

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mymapInfo = new Map(Object.entries(myInfo));

//another way =>

// for (const key in myInfo) {
//   mymapInfo.set(key, myInfo[key]);
// }

console.log(mymapInfo);
console.log(mymapInfo.size);
console.log(mymapInfo.has("role"));

//assign04

let theNumber = 100020003000;

console.log(
  +[...new Set(`${theNumber}`)].filter((number) => !!+number).join("")
);

// Needed Output
// 123

//assign05

let theName = "Elzero";

console.log(theName.split("")); //way01
console.log([...theName]); //way02
console.log(Array.from(theName)); //way03
console.log([].concat(...theName)); //way04

let x_Array = []; //way05
for (const iterator of theName) {
  x_Array.push(iterator);
}
console.log(x_Array);

//assign06

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

function copyWithInNumbers(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      let stash;
      stash = array[i];
      array.splice(i, 1);
      array.push(stash);
      counter += 1;
    }
  }
  array.copyWithin(counter, 0);
  return array;
}

console.log(copyWithInNumbers(chars1));
console.log(copyWithInNumbers(chars2));
console.log(copyWithInNumbers(chars3));

//assign07

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log([].concat(numsOne, numsTwo));
console.log(Array.from(numsOne.join("") + numsTwo.join(""), (x) => +x));

//assign08

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...new Set([...n2])));

// Needed Output
210;
