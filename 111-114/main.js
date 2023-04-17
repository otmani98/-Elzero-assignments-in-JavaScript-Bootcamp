// assign01

let result = document.querySelector(".result");

for (let i = 16; i <= 30; i++) {
  size.innerHTML += `<option value="${i}">${i}</option>`;
}

document.querySelectorAll(".assign01").forEach(function (element) {
  if (element.id === "fonts") {
    if (!window.localStorage.font) {
      window.localStorage.font = element.value;
    } else {
      element.value = window.localStorage.font;
    }
  }
  if (element.id === "colors") {
    if (!window.localStorage.color) {
      window.localStorage.color = element.value;
    } else {
      element.value = window.localStorage.color;
    }
  }
  if (element.id === "size") {
    if (!window.localStorage.size) {
      window.localStorage.size = element.value;
    } else {
      element.value = window.localStorage.size;
    }
  }
});

document.addEventListener("change", function (e) {
  if (e.target.id === "fonts") {
    window.localStorage.font = e.target.value;
  }
  if (e.target.id === "colors") {
    window.localStorage.color = e.target.value;
  }
  if (e.target.id === "size") {
    window.localStorage.size = e.target.value;
  }
  changeStateofresult();
});

changeStateofresult();

function changeStateofresult() {
  result.style.fontFamily = window.localStorage.font;
  result.style.color = window.localStorage.color;
  result.style.fontSize = `${window.localStorage.size}px`;
}

// assign02

document.querySelectorAll(".assign02").forEach((element) => {
  if (element.name === "name" && !!window.sessionStorage.iname) {
    element.value = window.sessionStorage.iname;
  }
  if (element.name === "info" && !!window.sessionStorage.iinfo) {
    element.value = window.sessionStorage.iinfo;
  }
  if (element.name === "email" && !!window.sessionStorage.iemail) {
    element.value = window.sessionStorage.iemail;
  }
  if (element.name === "country" && !!window.sessionStorage.icountry) {
    element.value = window.sessionStorage.icountry;
  }
});

document.addEventListener("input", function (e) {
  if (e.target.name === "name") {
    window.sessionStorage.iname = e.target.value;
  }
  if (e.target.name === "info") {
    window.sessionStorage.iinfo = e.target.value;
  }
  if (e.target.name === "email") {
    window.sessionStorage.iemail = e.target.value;
  }
  if (e.target.name === "country") {
    window.sessionStorage.icountry = e.target.value;
  }
});
