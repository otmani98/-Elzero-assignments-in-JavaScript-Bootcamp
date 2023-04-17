//assign 02
let addclasess = document.querySelector(".classes-to-add");
let removeclasess = document.querySelector(".classes-to-remove");
let currentelement = document.querySelector(".current");
let result = document.querySelector(".lista");

let add;
let remove;
checkIsThereElements();

document.body.addEventListener("input", function (e) {
  if (e.target.className === "classes-to-add") {
    add = e.target.value;
  } else if (e.target.className === "classes-to-remove") remove = e.target.value;
});

addclasess.onblur = function () {
  arrayofclasses = add.split(" ");
  for (const element of arrayofclasses) {
    currentelement.classList.add(element.toLowerCase());
  }
  addclasess.value = "";
  add = "";
  get_list_of_classes();
  checkIsThereElements();
};

removeclasess.onblur = function () {
  arrayofclasses = remove.split(" ");
  for (const element of arrayofclasses) {
    if (element === "current" || element === "element") {
      continue;
    }

    currentelement.classList.remove(element);
  }
  removeclasess.value = "";
  remove = "";
  get_list_of_classes();
  checkIsThereElements();
};

function checkIsThereElements() {
  if (currentelement.classList.length === 2) {
    result.innerHTML = "<p>There is no class to show!</p>";
  }
}

function get_list_of_classes() {
  result.innerHTML = "";
  currentelement.classList.forEach(function (element) {
    if (!(element === "current" || element === "element")) {
      result.innerHTML += `<span>${element}</span>`;
    }
  });
}

//assign 03
let our_element = document.querySelector(".our-element");
our_element.nextElementSibling.remove();

div_start = document.createElement("div");
div_start.textContent = "Start";
div_start.setAttribute("class", "start");
div_start.setAttribute("title", "Start Element");
div_start.setAttribute("data-value", "Start");
our_element.before(div_start);

div_end = document.createElement("div");
div_end.textContent = "End";
div_end.setAttribute("class", "end");
div_end.setAttribute("title", "End Element");
div_end.setAttribute("data-value", "End");
our_element.after(div_end);

//assign 04
let divs = document.getElementsByTagName("div");
let parentdiv = divs[divs.length - 3];
console.log(parentdiv.lastChild.nodeValue.trim());

//assign 05
let div5 = document.getElementById("assign05");

div5.childNodes.forEach((element) => {
  element.onclick = function () {
    console.log(`The Type of this Element is ${element.nodeName}`);
  };
});
