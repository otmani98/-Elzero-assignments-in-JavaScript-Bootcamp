//assign01
// create articles.json with its data

//assign02
let myRequest = new XMLHttpRequest();

myRequest.open("GET", "./articles.json");

myRequest.send();

myRequest.onreadystatechange = function () {
  if (myRequest.status === 200 && myRequest.readyState === 4) {
    console.log(myRequest.responseText);
    console.log("Data Loaded");

    //assign03
    let mainData = JSON.parse(myRequest.responseText);
    console.log(mainData);

    for (let article of mainData) {
      article["category"] = "All";
    }

    let UpdatedData = JSON.stringify(mainData);
    console.log(UpdatedData);

    //assign04
    let UpdatedDataasObject = JSON.parse(UpdatedData);
    let div = document.createElement("div");
    div.id = "data";
    for (const article of UpdatedDataasObject) {
      let divArticle = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerText = `${article.title}`;
      divArticle.appendChild(h2);
      let content = document.createElement("p");
      content.innerText = `${article.content}`;
      divArticle.appendChild(content);
      let author = document.createElement("p");
      author.innerText = `Author: ${article.author}`;
      divArticle.appendChild(author);
      let category = document.createElement("p");
      category.innerText = `Category: ${article.category}`;
      divArticle.appendChild(category);

      div.appendChild(divArticle);
    }
    document.body.appendChild(div);
  }
};
