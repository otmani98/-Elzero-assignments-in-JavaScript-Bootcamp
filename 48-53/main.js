//assign01
let start1 = 10;
let end1 = 100;
let exclude1 = 40;

for (let i = false; i <= end1; i += start1) {
  if (start1 === exclude1) {
    continue;
  }
  if (!i) {
    continue;
  }
  console.log(i);
}

//assign02
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= stop2; i--) {
  if (i < start2) {
    console.log("0" + i);
  } else {
    console.log(i);
  }
}

//assign03
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (; start3 <= end3; start3++) {
  console.log(start3);
  for (let j = breaker3; j <= breaker3 + breaker3; j += breaker3) {
    console.log(`-- ${j}`);
  }
}

//assign04
let index4 = 10;
let jump4 = 2;

for (;;) {
  // Write Your Code Here
  console.log(index4);
  index4 -= jump4;
  if (index4 < jump4 + jump4) {
    break;
  }
}

//assign05
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;

for (let i = +false; i < friends.length; i++) {
  if (friends[i][+false] === letter.toUpperCase()) {
    continue;
  }
  console.log(`${counter} => ${friends[i]}`);
  counter += +true;
}

//assign06
let start = 0;
let swappedName = "elZerO";
let newname = "";

for (; start < swappedName.length; start++) {
  if (swappedName[start] === swappedName[start].toLowerCase()) {
    newname += swappedName[start].toUpperCase();
  } else {
    newname += swappedName[start].toLowerCase();
  }
}
console.log(newname);

//assign07
let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];

for (; start7 < mix7.length - true; ) {
  start7++;
  if (typeof mix7[start7] === "string") {
    continue;
  }
  console.log(mix7[start7]);
}
