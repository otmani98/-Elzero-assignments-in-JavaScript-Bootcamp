//ASSIGN 02
document.write("<h1 id='newh1'>Elzero</h1>");
document.getElementById("newh1").style.color = "Blue";
document.getElementById("newh1").style.fontSize = "80px";
document.getElementById("newh1").style.fontWeight = "Bold";
document.getElementById("newh1").style.textAlign = "Center";
document.getElementById("newh1").style.fontFamily = "Arial";

let newnew_h1 = document.createElement("h1");
newnew_h1.innerText = 'Elzero';
newnew_h1.setAttribute("style", "color: red;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial");
document.body.appendChild(newnew_h1);

//ASSIGN 03

console.log("%cElzero %cWeb %cSchool", "color:red; font-size:40px", "color:green; font-size:40px; font-weight:bold", "color:blue; font-size:40px");

//ASSIGN 04

console.group("Group 1");
    console.log("message one");
    console.log("message two");
    console.groupCollapsed("Child Group");
        console.log("message one");
        console.log("message two");
        console.groupCollapsed("Grand Child Group");
            console.log("message one");
            console.log("message two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group 2");
    console.log("message one");
    console.log("message two");
    console.groupEnd();

//ASSIGN 05

console.table(["ahmed", "mohammed", "abdo", "sayed"])


//ASSIGN 06

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//console.log("Iam In Console");
//document.write("Iam In Page");
