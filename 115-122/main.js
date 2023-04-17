//assign1

assign1();
function assign1() {
  let myNumbers = [1, 2, 3, 4, 5];

  // Write Your Destructuring Assignment Here

  let [a, , , , e] = myNumbers;

  console.log(a * e); // 5
}

//assign2

assign2();
function assign2() {
  let mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    ["PHP", "Python", ["Django", "Laravel"]],
  ];

  const [a, b, c, [d, e, [f, g]]] = mySkills;

  // Write Your Destructuring Assignment Here

  console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

  // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
}

//assign3

assign3();
function assign3() {
  let arr1 = ["Ahmed", "Sameh", "Sayed"];
  let arr2 = ["Mohamed", "Gamal", "Amir"];
  let arr3 = ["Haytham", "Shady", "Mahmoud"];

  // Play With Arrays To Prepare For Destructuring
  let all = arr1.concat(arr2, arr3);

  // Write Your Destructuring Assignment Here
  const [c, , , , , , , a, b] = all;

  console.log(`My Best Friends: ${a}, ${b}, ${c}`);

  // My Best Friends: Shady, Mahmoud, Ahmed
}

//assign4

assign4();

function assign4() {
  const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };

  // Write Your Destructuring Assignment Here
  const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
  } = member;

  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working

  console.log(`I Live in ${c}`);
  // I Live in Egypt

  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
}

//assign5

assign5();

function assign5() {
  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": { US: "20 USD", JAP: "10 USD" },
      Origin: "30 USD",
    },
  };

  // Write Your Destructuring Assignment/s Here
  const { title: t, developer: d, releases } = game;

  let keys = Object.keys(releases);

  let [o, a] = keys;

  const {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin,
  } = releases;

  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style

  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games

  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan

  console.log(`Although I Love ${a}`);
  // Although I Love Ark Of Napishtim

  console.log(`${a} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD

  console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD

  console.log(`Origin Price Is ${Origin}`);
  // Origin Price Is 30 USD
}

//assign6

function assign6() {
  let chosen = 2;

  let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
  ];

  const {
    title,
    age,
    available,
    skills: [, lastskill],
  } = myFriends[chosen - 1];

  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(lastskill);
}
