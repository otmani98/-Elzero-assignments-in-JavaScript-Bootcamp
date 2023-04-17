//assign01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num03 = 3;

// Method 1
console.log(myFriends.slice(false, num03)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends);

// Method 3
myFriends.length = num03;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//assign02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

//assign03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(
  arrTwo.pop(),
  arrOne.reverse().shift(),
  arrOne.shift(),
  arrOne.pop(),
  arrTwo.reverse()
);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//assign04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//assign05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("found!");
}

if (haystack.slice(1).indexOf(needle) !== -1) {
  console.log("found!");
}

if (haystack.slice(0, -1).lastIndexOf(needle) !== -1) {
  console.log("found!");
}

//assign06
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr2.shift();
arr2.shift();
allArrs = allArrs
  .concat(arr2.shift() + arr1.pop() + arr2.shift())
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
