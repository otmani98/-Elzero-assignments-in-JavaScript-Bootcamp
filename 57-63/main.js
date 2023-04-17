//assign01
function sayHello(theName, theGender) {
  // Your Code Here
  console.log(
    `Hello ${
      theGender === "Male" ? "Mr " : theGender === "Female" ? "Mess " : ""
    }${theName}`
  );
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//assign02
function calculate(firstNum, secondNum, operation = "add") {
  // Your Code Here
  if (secondNum) {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  } else console.log("Second Number Not Found");
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//assign03
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(theAge * 12 + " Months");
    console.log(theAge * 12 * 4 + " Weeks");
    console.log(theAge * 12 * 4 * 7 + " Days");
    console.log(theAge * 12 * 4 * 7 * 24 + " Hours");
    console.log(theAge * 12 * 4 * 7 * 24 * 60 + " Minutes");
    console.log(theAge * 12 * 4 * 7 * 24 * 60 * 60 + " Seconds");
  } else console.log("The Age is Out Of The Range");
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//assign04
function checkStatus(a, b, c) {
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
      available === false ? "Not " : ""
    }Available For Hire`
  );
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//assign05
function createSelectBox(startYear, endYear) {
  document.write("<select>");
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

//assign06
function multiply(...numbers) {
  result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") continue;
    result *= parseInt(numbers[i]);
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
