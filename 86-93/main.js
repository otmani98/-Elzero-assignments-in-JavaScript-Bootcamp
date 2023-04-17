//assign01
let way01 = document.getElementById("elzero");
let way02 = document.getElementsByClassName("element")[0];
let way03 = document.getElementsByName("js")[0];
let way04 = document.getElementsByTagName("div")[0];
let way05 = document.querySelector(".element");
let way06 = document.querySelector("#elzero");
let way07 = document.querySelector("div");
let way08 = document.querySelector('[name="js"]');
let way09 = document.querySelectorAll(".element")[0];
let way10 = document.querySelectorAll("#elzero")[0];
let way11 = document.querySelectorAll("div")[0];
let way12 = document.querySelectorAll('[name="js"]')[0];
let way13 = document.body.firstElementChild;
let way14 = document.body.firstChild.nextSibling;
let way15 = document.getElementsByTagName("body").item(0).childNodes[1];
console.log(way01);
console.log(way02);
console.log(way03);
console.log(way04);
console.log(way05);
console.log(way06);
console.log(way07);
console.log(way08);
console.log(way09);
console.log(way10);
console.log(way11);
console.log(way12);
console.log(way13);
console.log(way14);
console.log(way15);

//assign02

let divimages = document.getElementsByClassName("assign02")[0].children;

console.log(divimages);

for (let i = 0; i < divimages.length; i++) {
  divimages[i].children[0].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  divimages[i].children[0].alt = "Elzero Logo";
}

//assign03

let input = document.getElementsByName("dollar")[0];
let div = document.getElementsByClassName("result")[0];

input.addEventListener("input", function () {
  div.textContent = `{${input.value ? input.value : 0}} USD Dollar = {${(
    input.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
});

//assign04

let divOne = document.getElementsByClassName("one")[0];
let divTwo = document.getElementsByClassName("two")[0];

let Onetitle = divOne.title;
let Onecontent = divOne.textContent;
divOne.title = divTwo.title;
divTwo.title = Onetitle;
divOne.textContent = divTwo.textContent;
divTwo.textContent = Onecontent + " 2";

//assign05

let listofimages = assign05.children;

console.log(listofimages);

for (let index = 0; index < listofimages.length; index++) {
  if (listofimages[index].alt) {
    listofimages[index].alt = "Old";
  } else listofimages[index].alt = "Ezlero New";
}
