//assign 01

// Create Your Object Here

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//assign 02

// Method One
// Create Your Object Here
let objMethodOne = { property: "Method One" };
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({});
objMethodThree["property"] = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"

//assign 03
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

//assign 04

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// // Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}
