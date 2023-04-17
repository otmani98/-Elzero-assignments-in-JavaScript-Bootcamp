//styling html
document.documentElement.style.cssText =
  "scroll-behavior: smooth; position: relative; min-height: 100%;";

//styling body
document.body.style.cssText =
  "margin:0 0 50px;font-family: Arial, Helvetica, sans-serif; background-color: #EEE;";

let header = document.createElement("header");

//styling header
header.style.cssText =
  "display:flex; justify-content: space-between;align-items: center; background-color: white;";

let h1 = document.createElement("h1");
let h1a = document.createElement("a");
h1a.href = "#";
let h1atext = document.createTextNode("Elzero");
h1a.appendChild(h1atext);
h1.appendChild(h1a);
header.appendChild(h1);

//styling a & h1
h1a.style.cssText =
  "text-decoration: none;margin: 15px;color: rgb(35, 169, 110);font-size: 24px;";
h1.style.cssText = "margin: 0px 0px 5px 0px;";

let nav = document.createElement("nav");
let ul = document.createElement("ul");
//styling ul
ul.style.cssText = "display:flex; margin:0;";

for (let element of ["Home", "About", "Services", "Contact"]) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.href = `#${element.toLowerCase()}`;
  let linktext = document.createTextNode(`${element}`);
  link.appendChild(linktext);
  li.appendChild(link);
  ul.appendChild(li);
  //styling li
  li.style.cssText = "list-style: none;";
  //styling li a
  link.style.cssText =
    "text-decoration: none; padding:5px; color:#817a7a;font-size: 12px;";
}

nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);

//end header and body part
let products_counter = 15;

let divparentproducts = document.createElement("div");

//styling divparentproducts
divparentproducts.style.cssText =
  "display: flex; flex-wrap: wrap; gap:10px;margin:15px; justify-content: center;";

for (let i = 1; i <= products_counter; i++) {
  let divpro = document.createElement("div");
  //syling divpro
  divpro.style.cssText =
    "width: 28%; text-align: center; background-color: white; border-radius: 9px;";

  let h3pro = document.createElement("h3");
  let h3protext = document.createTextNode(`${i}`);
  h3pro.style.cssText = "margin:15px 0px 5px 0px;";

  h3pro.appendChild(h3protext);
  divpro.appendChild(h3pro);

  let ppro = document.createElement("p");
  let pprotext = document.createTextNode(`Product`);
  //syling divpro
  ppro.style.cssText =
    "font-size: 12px; color: rgb(129, 122, 122); margin:5px 0px 15px 0px;";

  ppro.appendChild(pprotext);
  divpro.appendChild(ppro);

  divparentproducts.appendChild(divpro);
}

document.body.appendChild(divparentproducts);

//end products part

let footer = document.createElement("footer");
footer.style.cssText =
  "background-color:rgb(35, 169, 110); color:white;position: absolute; left: 0; bottom: 0; height: 40px; width: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center;";
let footertext = document.createTextNode("Copyright 2021");
footer.appendChild(footertext);
document.body.appendChild(footer);
