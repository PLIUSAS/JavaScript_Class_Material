const button = document.createElement("button");
button.textContent = "Hello!";
document.body.appendChild(button);
button.addEventListener("click", () => {
  button.style.effect = "dropshadow(0)";
  button.style.margin = "0px 10px";
  button.style.width = "100px";
  button.style.height = "25px";
  button.style.color = "white";
  button.style.backgroundColor = "black";
  const p = document.createElement("p");
  p.style.margin = "5px 10px";
  p.style.fontSize = "25px";
  p.style.color = "red";
  document.body.appendChild(p);
  p.textContent = "Ko žiuri obuoly ??";
  let repeateText = p.repeate(); // Pasikartojimas
  repeateText.appendChild(p);
});

const people = [
  {
    name: "Florin",
    age: 18,
  },
  {
    name: "Laurynas",
    age: 15,
  },
  {
    name: "Deividas",
    age: 21,
  },
];
const adult = people.filter((people) => people.age >= 20);
// console.log(adult);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}
// console.log(even);

const number = [1, 2, 3, 1, 2, 3, 5, 4, 6, 1, 2, 3];
const nums = number.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
// console.log(nums);

// https://www.learn-js.org/en/Welcome - JavaScript:
// Learn the Basics
// Advanced tutorials

// Loops
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " I Love You");
  }
}
// Loops
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
  console.log("The member of myArray in index " + i + " is " + myArray[i]);
}
// Loops
var i = 99;
while (i > 0) {
  console.log(i + " bottles of beer on the wall");
  i -= 1;
}
// Objektai
// personObject yra objektas su vardu/pavarde
var personObject = {
  firstName: "John",
  lastName: "Smith",
};
personObject.age = 23;
personObject["salary"] = 14000; // Pridedam prie objekto kazkoki apibudinima jog objekto salary yra lygus 14000 (pvz last name);

// (hasOwnProperty) būdas patikrinti, ar narys iš tikrųjų priklauso objektui.
for (var member in personObject) {
  if (personObject.hasOwnProperty(member)) {
    console.log(
      "the member " + member + " of personObject is " + personObject[member]
    );
  }
}

// Functions - funkcijos
function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Eric"));

var greet = function (name) {
  return "Hello " + name + "!";
};

console.log(greet("Eric"));

//Pop-up Boxes - Iššokantys langeliai

// „Javascript“ yra trijų tipų iššokantys langai: patvirtinimas, įspėjimas ir raginimas.
// Norėdami naudoti bet kurį iš jų, įveskite:
// confirm("Hi!"); - Patvirtinimas.
// prompt("Bye!"); - raginimas.
// alert("Hello"); - įspėjimas.

// Callbacks - Atgaliniai skambučiai

var callback = function () {
  console.log("Done!");
};
setTimeout(callback, 5000);

setTimeout(function () {
  console.log("Done!");
}, 5000);

// Arrow Functions - Rodyklės funkcijos
// const greet = (name) => {
//   "Hello " + name + "!";
// };
// console.log(greet("Eric"));

let numberse = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo(numbere) {
  return numbere * 2;
}

// let multipliedNumbers = numbers.map(multiplyByTwo);

// console.log(multipliedNumbers);

// Using ES6 arrow functions
// const multiplyByTwo = (number) => number * 2;

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);

// Promises - Pažadai
