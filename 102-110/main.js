//assign 01
let range = prompt("Print Number From - To");

let start = Number(range.slice(0, range.indexOf("-")));
let end = Number(range.slice(range.indexOf("-") + 1));

if (start > end) {
  let value = start;
  start = end;
  end = value;
}

for (; start <= end; start++) {
  document.body.innerHTML += `<div>${start}</div>`;
}

//assign02
function popupHello() {
  let divpopup = document.createElement("div");
  divpopup.className = "popup";
  divpopup.innerHTML = `<h3>Wlcome</h3><p>Welcome to Elzero</p><span class="exit">x</span>`;
  divpopup.style.cssText = `background-color: rgb(249 249 249); width: 250px; padding: 15px; text-align: center; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid #DDD;`;
  document.body.appendChild(divpopup);
  spanpopup = document.querySelector(".exit");
  spanpopup.style.cssText = `color: white; background-color: red; padding: 0px 6px 2px; border-radius: 50%; position: absolute; right: -3%; top: -5%; font-weight: bold;cursor: pointer;`;
}

setTimeout(popupHello, 5000);

document.addEventListener("click", function (e) {
  if (e.target.className === "exit") {
    divpopup = document.querySelector(".popup");
    divpopup.remove();
  }
});

//assign03
counter3 = setInterval(() => {
  let div = document.querySelector(".assign03");
  div.textContent -= 1;
  if (div.textContent === "0") {
    clearInterval(counter3);
  }
}, 1000);

//assign04
counter4 = setInterval(() => {
  let div = document.querySelector(".assign04");
  div.textContent -= 1;
  if (div.textContent === "0") {
    window.location = "https://Elzero.org";
  }
}, 1000);

//assign05
counter5 = setInterval(() => {
  let div = document.querySelector(".assign05");
  div.textContent -= 1;
  if (div.textContent === "5") {
    window.open(
      "https://Elzero.org",
      "_blank",
      "width=500,height=500,left=300,top=50"
    );
  }
  if (div.textContent === "0") {
    clearInterval(counter5);
  }
}, 1000);
