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
  let repeateText = p.repeat(); // Pasikartojimas
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

// Learn the Basics //

// Loops - Kilpos //
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " I Love You");
  }
}
// Loops - Kilpos //
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
  console.log("The member of myArray in index " + i + " is " + myArray[i]);
}
// Loops - Kilpos //
var i = 99;
while (i > 0) {
  console.log(i + " bottles of beer on the wall");
  i -= 1;
}
// Object - Objektai //

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

// Functions - funkcijos //
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

// Advanced tutorials //

// Promises - Pažadai

// Funkcija //

function getServerStatus() {
  const result = fetch("/server/status");

  result.then(function (status) {
    console.log("The status from the server is: ", status.ok);
  });
}
getServerStatus();

// Funkcija //

function sumAsync(x, y) {
  const p = new Promise((resolve, reject) => {
    // this resolves the promise we just created with the output of x+y
    resolve(x + y);
  });

  // This returns the promise, not the value
  return p;
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});

// Funkcija //

function sumAsync(x, y) {
  console.log("1. sumAsync is executed");
  const p = new Promise((resolve, reject) => {
    // run this in 500ms from now
    setTimeout(() => {
      console.log(
        "4. Resolving sumAsync's Promise with the result after 500ms"
      );
      resolve(x + y);
    }, 500);

    // we don't need to return anything
    console.log("2. sumAsync Promise is initialized");
  });
  console.log("3. sumAsync has returned the Promise");
  return p;
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("5. The result of the addition is:", result);
});

// Funkcija //

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
    // run this in 500ms from now
    setTimeout(() => {
      if (x < 0 || y < 0) {
        reject("Negative values received");
      } else {
        resolve(x + y);
      }
    }, 500);

    // we don't need to return anything
  });
}
sumAsync(-5, 7)
  .then((result) => {
    console.log("The result of the addition is:", result);
  })
  .catch((error) => {
    console.log("Error received:", error);
  });

function upperCaseAsync(s) {
  return new Promise((resolve, reject) => {
    if (s === null) {
      reject();
    } else {
      resolve(s.ToUpperCase());
    }
  });
}
// upperCaseAsync("steve").then(console.log());
// upperCaseAsync(null).catch((x) => {
//   console.log("No string received!");
// });

// Async and Await - Asinchronizuoti ir laukti //

// Funkcija //
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Funkcija (sujungimas sumAsync sujung4 su sleep)//

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
    sleep(500).then(() => {
      resolve(x + y);
    });
  });
}
// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});

// Funkcija naudojant vietoj (.then) į (await) kuri atrogo lengviau parašoma, bet prasmė tapati.

// Funkcija //
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Funkcija  su await//

async function sumAsync(x, y) {
  // this code waits here for 500 milliseconds
  await sleep(500);
  // done waiting. let's calculate and return the value
  return x + y;
}
// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});

// Object Oriented JavaScript - Objektinis JavaScript //

// Funkcija //
function Person(firstName, lastName) {
  // construct the object using the arguments
  this.firstName = firstName;
  this.lastName = lastName;

  // a method which returns the full name
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName()); // outputs "John Smith"

// Viršutinės funkcijos pavyzdys atvaizduotas lengviau ir paverstas kaip - OBJEKTAS //
var myPerson = {
  firstName: "John",
  lastName: "Smith",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Function Context - Funkcijų kontekstas //

// Metodo susiejimas su objektu
var person = {
  name: "John",
};

function printName() {
  console.log(this.name);
}
var boundPrintName = printName.bind(person);
boundPrintName(); // prints out "John"
printName.call(person); // prints out "John"
// skambinti/kreiptis vs susieti
var boundPrintName = printName.call(person); //boundPrintName gets printName's return value (null)
boundPrintName(); //doesn't work because it's not a function, it's null

printName.bind(person); //returns a new function, but nothing is using it so it's useless
printName(); //throws error because this.name is not defined
printName.call(person); //is the same as
printName.bind(person)(); //executes the function returned by bind
var boundPrintName = printName.bind(person); //is the same as
var boundPrintName = function () {
  printName.call(person);
};
// Inheritance - Paveldėjimas //
// Prototipo atributas
function Person(name, age) {
  this.name = name;
  this.age = age;

  function describe() {
    return this.name + ", " + this.age + " years old.";
  }
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};
// Paveldėjimas
// Tarkime, kad norime sukurti a Person objektas ir a Student objektas, kilęs iš Person:
var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};
var Student = function () {};
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
// Kaip matome šiame pavyzdyje, initialize metodas priklauso Person ir learn metodas priklauso Student, abu dabar yra dalis me objektas.
// Atminkite, kad „JavaScript“ yra daug būdų, kaip paveldėti, ir tai tik vienas iš jų.

// Pratimas //
// Sukurkite objektą, vadinamą Teacher kilęs iš Person klasę ir įgyvendinkite metodą, vadinamą teach kuri gauna eilutę, vadinamą subject, ir išspausdina:
// [teacher's name] is now teaching [subject]

var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
// TODO: create the class Teacher and a method teach
var Teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };
};
Teacher.prototype = new Person();
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

// Destructuring - Destruktūrizavimas //

// Consider this object
const person = {
  head: {
    eyes: "x",
    mouth: {
      teeth: "x",
      tongue: "x",
    },
  },
  body: {
    shoulders: "x",
    chest: "x",
    arms: "x",
    hands: "x",
    legs: "x",
  },
};

// If we want to get head, the old way:
// let head = person.head;

// ES6 Destructuring
// let { head } = person;

// We can give other name as if a variable was declared, in the same line
// let { head: myHead } = person;

// So we can do...
console.log(myHead); // prints '{ eyes, mouth: { ... } }'

// Su masyvais: //

// let numbers = ["2", "3", "7"];

// Old way
let two = numbers[0];
let three = numbers[1];

// ES6 Destructuring
// let [two, three] = numbers;

// We can give them other names too
// let [two: positionZero, three: positionOne] = numbers;

console.log(positionZero); // prints '2'
console.log(positionOne); // prints '3'

// Tai galime padaryti ir su funkcijų parametrais: //

// Old way
function getHeadAndBody(person) {
  let headAndBody = {
    head: person.head,
    body: person.body,
  };

  return headAndBody;
}
// ES6 Destructuring
function getHeadAndBody({ head, body }) {
  return { head, body };
}
// With arrow functions
let getHeadAndBody = ({ head, body }) => {
  head, body;
};

// Pratimas //
// Gauti legs nuosavybę ir gaukite duomenis trečioje pozicijoje numbers naudojant destruktūrizavimą. Duok jai vardus myLegs ir thirdPosition atitinkamai.

const person = {
  head: {
    eyes: "x",
    mouth: {
      teeth: "x",
      tongue: "x",
    },
  },
  body: {
    shoulders: "x",
    chest: "x",
    arms: "x",
    hands: "x",
    legs: "x",
  },
};
// const numbers = ["2", "3", "4"];
// TODO: Destructure here.
let {
  body: { legs: myLegs },
} = person;
let [onePosition, secondPosition, thirdPosition] = numbers;
// or...
// const { legs: myLegs } = person.body;
// const [,,thirdPosition] = numbers;
console.log(myLegs);
console.log(thirdPosition);

// Data Structures - Duomenų struktūros //

// https://github.com/ronreiter/interactive-tutorials

// Failo pavadinimas.md //
// Tutorial
// --------
// Here you may write text that explains a certain feature.

// Exercise
// --------
// Here you will need to write the purpose of the exercise. Finishing the exercise correctly
// must be accomplished using the new feature that you are explaining.

// Tutorial Code
// -------------
// Write a code block that will appear on the interpreter window. For example, you may
// write an empty function, which the user must complete in order to finish the exercise.

// Expected Output
// ---------------
// Write a code block that will describe the exact output expected from the modified code,
// if it has been modified correctly.

// Solution
// --------
// Write the solution code to the problem.

// LIETUVISKAI //
// Tutorial - Pamoka
// ---------
// Čia galite parašyti tekstą, paaiškinantį tam tikrą funkciją.

// Exercise - Pratimas
// ---------
// Čia reikės parašyti pratimo tikslą. Teisingai baigti pratimą
// turi būti atlikta naudojant naują funkciją, kurią paaiškinate.

// Tutorial Code - Pamokos kodas
// --------------
// Parašykite kodo bloką, kuris pasirodys interpretatoriaus lange. Pavyzdžiui, galite
// parašykite tuščią funkciją, kurią vartotojas turi atlikti, kad užbaigtų pratimą.

// Expected Output - Tikėtina išvestis
// ----------------
// Parašykite kodo bloką, kuris apibūdins tikslią išvestį, kurios tikimasi iš modifikuoto kodo,
// jei jis buvo teisingai pakeistas.

// Solution - Sprendimas
// ---------
// Parašykite problemos sprendimo kodą.
