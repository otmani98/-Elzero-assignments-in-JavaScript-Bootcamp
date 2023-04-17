// //assign06

let form = document.forms[0];

form.onsubmit = function (e) {
  e.preventDefault();
};

let elements = document.getElementsByName("elements")[0];
let texts = document.getElementsByName("texts")[0];
let type = document.getElementsByName("type")[0];
let create = document.getElementsByName("create")[0];
let results = document.getElementsByClassName("results")[0];

let howmuch;
let thetext;
let typeofele;

elements.addEventListener("input", function () {
  howmuch = elements.value;
});
texts.addEventListener("input", function () {
  thetext = texts.value;
});
type.addEventListener("input", function () {
  typeofele = type.value;
});

create.onclick = function () {
  results.innerHTML = "";
  for (let i = 0; i < howmuch; i++) {
    if (typeofele === "div") {
      results.innerHTML += `<div class="box" title="Element" id="id-${
        i + 1
      }">${thetext}</div>`;
    } else {
      results.innerHTML += `<section class="box" title="Element" id="id-${
        i + 1
      }">${thetext}</section>`;
    }
  }
};
