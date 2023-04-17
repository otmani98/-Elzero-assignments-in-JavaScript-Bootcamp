// ------------------challange
let aa = "We love";
let bb = "JavaScript";

document.write(aa + " " + bb + "\n");
// -------------------------

// ------------------challange
let theTitle = "Elzero";

let theDesc = "Elzero Web School";

let theDate = "25/10";

let theStructure = `
    <div class="card">
        <h3>Hello ${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
`;

document.write(theStructure.repeat(4));
document.write("<hr>".repeat(2));
// -------------------------

// ------------------challange
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// .Do Not Use Variable Twice

console.log(-d * +e); // -2000
console.log(-d + ++e * ++g + ++f); // 173

// -------------------------

// ------------------challange of numbers

let h = 1_00;
let i = 2_00.5;
let j = 1e2;
let k = 2.4;

//the smallest integer
console.log(Math.round(Math.min(h, i, j, k)));

//10000
console.log(Math.pow(h, Math.round(k)));

//4 methods to get 2 from k
console.log(Math.round(k));
console.log(Math.floor(k));
console.log(parseInt(k));
console.log(Math.trunc(k));

//i and k to get some values
console.log((Math.floor(i) / Math.ceil(k)).toFixed(2));
console.log(Math.round(i) / Math.ceil(k));

// ------------------// ------------------

// ------------------challange of strings

let stringo = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(stringo.charAt(2).toUpperCase() + stringo.slice(3, 6)); // Zero

// 8 H
console.log(stringo.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(stringo.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${stringo.substr(0, 6)}${stringo.substr(10, 7)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  stringo.charAt(0).toLowerCase() +
    stringo.slice(1, -1).toUpperCase() +
    stringo.slice(-1).toLowerCase()
); // eLZERO WEB SCHOOl
// ------------------// ------------------

// ------------------challange of conditions

let MyVar = 10;

if (MyVar < 10) {
  console.log(10);
} else if (MyVar >= 10 && MyVar <= 40) {
  console.log("10 to 40");
} else if (MyVar > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

MyVar < 10
  ? console.log(10)
  : MyVar >= 10 && MyVar <= 40
  ? console.log("10 to 40")
  : MyVar > 40
  ? console.log("> 40")
  : console.log("Unknown");

// ------------------// ------------------

// ------------------challange of  if conditions

let st = "Elzero Web School";

if (`${st.length * 2}` === "34") {
  console.log("Good");
}

if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}

if (!typeof st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// ------------------challange of switch
let job = "Manager";
let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

switch (job) {
  case "Manager":
    salary = 8000;
    break;

  case "IT":
  case "Support":
    salary = 6000;
    break;

  case "Developer":
  case "Designer":
    salary = 6000;
    break;

  default:
    salary = 4000;
}

console.log(`${job} => ${salary}`);

/////////////////////////////////////////--

let holidays = 0;
let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

if (holidays === 0) {
  money = 5000;
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
} else if (holidays === 3) {
  money = 2000;
} else if (holidays === 4) {
  money = 1000;
} else {
  money = 0;
}

console.log(`My Money is ${money}`);

// ------------------// ------------------

// ------------------challange of arrays

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my);

my.reverse().splice(zero, counter - true);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + true, counter)); // ["Elham", "Mazero"]

console.log(
  my.slice(zero + true, counter)[zero].slice(zero, counter - true) +
    my.slice(zero + true, counter)[+true].slice(counter - true)
); // "Elzero"

console.log(
  my.slice(zero + true, counter)[+true][counter + true] +
    my.slice(zero + true, counter)[+true][counter + true + true].toUpperCase()
); // "rO"

///method2

let zeroz = 0;
let counterz = 3;
let myz = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(myz);

myz.reverse().splice(zeroz, --counterz);
console.log(myz); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(
  myz[zeroz].slice(--zeroz, --counterz) +
    myz[myz.length - counterz].slice(counterz)
); // "Elzero

console.log(
  myz[myz.length - counterz].slice(
    myz[myz.length - counterz].length - counterz
  )[zeroz] +
    myz[myz.length - counterz]
      .slice(myz[myz.length - counterz].length - counterz)
      [++zeroz].toUpperCase()
);

//------- loop challenge-------------------

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let count_admin = 0;
let contento = ``;

for (; count_admin < myAdmins.length; ) {
  if (myAdmins[count_admin] === "Stop") {
    break;
  }
  contento += `<hr>`;
  contento += `<div>`;
  contento += `The Admin For Team is ${myAdmins[count_admin]}`;
  contento += `<h3>Team members:</h3>`;
  contento += `<ul>`;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[count_admin][0]) {
      contento += `<li>${myEmployees[j]}</li>`;
    }
  }
  contento += `</ul>`;
  contento += `</div>`;
  count_admin++;
}

document.write(`<p>We Have ${count_admin} admins</p>`);
document.write(contento);

//------- function challenge-------------------

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name;
  let age;
  let available;

  typeof a === "string"
    ? (name = a)
    : typeof b === "string"
    ? (name = b)
    : (name = c);

  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
    ? (age = b)
    : (age = c);

  typeof a === "boolean"
    ? (available = a)
    : typeof b === "boolean"
    ? (available = b)
    : (available = c);

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      !available ? "Not " : ""
    }Available For Hire`
  );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//------- ------------//----------------------

//------- Function Arrow Challenges-------------------

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//   // Parameter ?
//   return `String [${names.join("], [")}] => Done !`;
// };

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two[+true] + nums[+false][+false];

function calc(one, two, ...nums) {
  return one + two[+true] + nums[+false][+false];
}

console.log(calc(10, myNumbers, myNumbers)); // 80

//------- ------------//----------------------

//------- Higher Order Functions Challenges-------------------
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter((ele) => isNaN(ele) && ele !== ",")
  .reduce(function (acuu, current, index, array) {
    if (acuu === current) {
      current = "";
    }
    if (current === "_") {
      current = " ";
    }
    if (index === array.length - true) {
      current = "";
    }
    return acuu + current;
  });
console.log(solution); // Elzero Web School

//------- ------------//----------------------

//------- destructing \challenge-------------------

/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const {
  title,
  age,
  available,
  skills: [, lastskill],
} = myFriends[chosen - 1];

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(lastskill);
//-------------------------------------------------

let myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(1, -2, -1);

console.log(myArray);

////------- set/map \challenge-------------------

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...new Set([...n2])));
//-------------------------------------------------

///----------regular expressions challenge-------------------

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let rererere = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;

console.log(url1.match(rererere));
console.log(url2.match(rererere));
console.log(url3.match(rererere));
console.log(url4.match(rererere));
console.log(url5.match(rererere));
//-------------------------------------------------
