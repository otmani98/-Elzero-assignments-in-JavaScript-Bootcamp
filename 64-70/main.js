//assign01

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let eName = zName.split(" ");
    return `${eName[0]} ${eName[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    let eAge = zAge.split(" ");
    return `Your Age Is ${eAge[0]}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//assign02

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = (_) => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//assign03

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

let checkero = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checkero("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkero("Ahmed")("Not Available")()); // Iam Not Avaialble

//assign04

function specialMix(...data) {
  // Your Code Here
  let result = 0;

  for (let i of data) {
    if (typeof i === "number") {
      result += i;
    } else if (parseInt(i)) {
      result += parseInt(i);
    }
  }

  if (result) {
    return result;
  } else return "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
