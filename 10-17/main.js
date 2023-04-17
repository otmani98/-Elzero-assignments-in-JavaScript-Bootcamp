
//Assign01
numberOne = 10;
numberTwo = 20;

// Add Variables Here

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

//Assign02
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


//Assign03
console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");



//Assign04
let a = 21;
let b = 20;

let c = d = e = f = g = a;

let h = i = j = k = z = b;

console.log(`_${z}_${i}${d}_${j}${e}_${k}${f}_${g}_`);

// _21_2021_2021_2021_20_