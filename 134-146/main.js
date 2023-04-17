//assign01

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipMatch = /\d{4}:[a-z]{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

console.log(ip.match(ipMatch));

//assign02

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesMatch = /Os\d*o/gi;

console.log(specialNames.match(specialNamesMatch));

// Output
// ['Os10O', 'OsO', 'Os100O']

//assign03

let phone = "+(995)-123 (4567)";

let phoneMatch = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneMatch));

//assign04

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log("https://facebook.com:65535/fsdfsd-sdfsfs-sdfds-f".match(re));

//https? => this part is about https protocol and s is optional so that's why we use ?
//:\/\/  => this means // and we use escape \ to make it run as a simple character
//(?:[-\w]+\.)? => that means followed by [a-zA-Z0-9_-]+ then .dot
//([-\w]+) => this group means any thing in this range [a-zA-Z0-9_-]+
//\.\w+ => dot then this range [a-zA-Z0-9_]
//(?:\.\w+)? => this means followed by .dot then [a-zA-Z0-9_]+
//\/?.* => optional slash / then dot of everything with star if nothing.

//assign05

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let rerere = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)(\d{4}|\d{2})/; // Write Pattern Here

console.log(date1.match(rerere)); // "25/10/1982"
console.log(date2.match(rerere)); // "25 - 10 - 1982"
console.log(date3.match(rerere)); // "25 10 1982"
console.log(date4.match(rerere)); // "25 10 82"

//assgn06

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let rererere = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;

console.log(url1.match(rererere));
console.log(url2.match(rererere));
console.log(url3.match(rererere));
console.log(url4.match(rererere));
console.log(url5.match(rererere));
