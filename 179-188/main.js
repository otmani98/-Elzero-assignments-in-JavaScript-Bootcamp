//assign01
function getData(url) {
  return new Promise((resolve, reject) => {
    let data = new XMLHttpRequest();
    data.open("GET", url);
    data.send();
    data.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("There is No Data"));
      }
    };
  });
}

getData("./file.json")
  .then(function (result) {
    result.length = 5;
    return result;
  })
  .then(function (result) {
    for (const item of result) {
      let div = document.createElement("div");
      div.innerHTML += `<h3>${item.title}</h3>`;
      div.innerHTML += `<p>${item.description}</p>`;
      document.body.appendChild(div);
    }
  });

//assign02

function getfetch(url) {
  fetch(url).then(async function (result) {
    document.body.innerHTML += `<hr>`;
    for (const item of (await result.json()).slice(0, 5)) {
      let div = document.createElement("div");
      div.innerHTML += `<h3>${item.title}</h3>`;
      div.innerHTML += `<p>${item.description}</p>`;
      document.body.appendChild(div);
    }
  });
}

getfetch("./file.json");
