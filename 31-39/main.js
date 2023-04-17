//comparison + logical opreators

//assign01
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 < 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(!10 <= -"-40"); // true
console.log(!"10" <= 10); // true
console.log(!20 == false); // true

//assign02
let num_1 = 10;
let num_2 = 20;

console.log(num_1 < num_2); // true
console.log(num_2 >= num_1); // true
console.log(num_2 > num_1); // true
console.log(num_1 <= num_2); // true
console.log(!!num_1 === !!num_2); // true
console.log(typeof num_1 == typeof num_2); // true

//assign03
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//if conditions

//assign01
let mynum = 110; // "009" "020" "110"

if (mynum < 10) {
  console.log("00" + mynum);
} else if (mynum >= 10 && mynum < 100) {
  console.log("0" + mynum);
} else {
  console.log("" + mynum);
}

//assign02
let manum1 = 9;
let mastr = "9";
let mastr2 = "20";

if (manum1 == mastr) {
  console.log(`${manum1} Is The Same Value As ${mastr}`);
}
if (manum1 == mastr && typeof manum1 !== typeof mastr) {
  console.log(`${manum1} Is The Same Value As ${mastr} But Not The Same Type`);
}
if (manum1 !== mastr2) {
  console.log(`${manum1} Is Not The Same Value Or The Same Type As ${mastr2} `);
}
if (typeof mastr === typeof mastr2 && mastr != mastr2) {
  console.log(`${mastr} Is The Same Type As ${mastr2} But Not The Same Value`);
}

//assign03
let num01 = 10;
let num02 = 30;
let num03 = "30";

if (num03 > num01 && typeof num03 !== typeof num02) {
  console.log(
    `${num03} Is Larger Than ${num01} And Type ${typeof num03} Not The Same Type As ${typeof num02}`
  );
}

if (num03 > num01 && num03 == num02 && typeof num03 !== typeof num02) {
  console.log(
    `${num03} Is Larger Than ${num01} And Value Is The Same As ${num02} And Type ${typeof num03} Not The Same Type As ${typeof num02}`
  );
}

if (num03 !== num01 && typeof num03 !== typeof num02) {
  console.log(
    `${num03} Value And Type Is Not The Same As ${num01} And Type Is Not The Same As ${num02}`
  );
}

//assign04
// Edit What You Want Here

let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//assign 01 ===> for switch assignments

let day = "   monday  ";
day = day.trim()[0].toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}
