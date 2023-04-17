//assign01

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix
  .map((ele) => (isNaN(ele) ? ele : ""))
  .reduce((accu, current) => {
    return accu + current;
  });

console.log(newMix); // Elzero

//assign02
let myString = "EElllzzzzzzzeroo";

let NewmyString = myString
  .split("")
  .filter((element, index) => {
    return myString[index] === myString[index - 1] ? false : true;
  })
  .join("");

console.log(NewmyString); // Elzero


//assign03
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newmyArray = myArray.reduce((a, c) => {
  if (Array.isArray(c)) c = c.join("");
  return a + c;
});

console.log(newmyArray); // Elzero

//assign04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let NewnumsAndStrings = numsAndStrings
  .filter((ele) => !isNaN(ele))
  .map((ele) => -ele);

console.log(NewnumsAndStrings); // [-1, -10, 10, 20, -5, -3]

//assign05

let nums = [2, 12, 11, 5, 10, 1, 99];

let newnums = nums.reduce((a, c) => {
  if (c % 2 !== 0) {
    return a + c;
  } else return a * c;
}, 1);

console.log(newnums);
