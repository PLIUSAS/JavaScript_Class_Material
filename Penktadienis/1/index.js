// Find Maximum Value Create an array of numbers and write a JavaScript function to find the maximum value in that array using a loop and an if statement.

const arr = [10000, 6, -10, 5, 100, -6];

let max = arr[0];
for (let index = 1; index < arr.length; index++) {
  if (arr[index] > max) {
    max = arr[index];
  }
}

console.log(max);

// Task 3: Password Strength Checker Create a simple password strength checker. Write a function that takes a password as input and checks its strength based on the following criteria:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one digit
// Contains at least one special character (e.g., !, @, #, $, etc.)
const pass = "slapt@azOdis123";
const regex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
const res = regex.test(pass);
console.log(res);

// DOM Manipulation Create an HTML page with a list of items (e.g., a todo list). Use querySelector to select the list items and then use a loop to iterate through them and apply some styling or modification (e.g., change their background color or add a class).

const listItems = document.querySelectorAll("ul > li");

for (let index = 0; index < listItems.length; index++) {
  listItems[index].style.backgroundColor = "green";
  listItems[index].classList.add("li-item");
  listItems[index].classList.remove("big-text");
}
//  const li = {
//   style: {
//     backgroundColor: 'green;'
//   }
//  }

// FizzBuzz Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz".

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}

// Reverse a String Write a JavaScript function that takes a string as input and returns the reverse of that string using a loop.

const str = "labas petrai";

let reversedString = "";

console.log(str.length);

for (let index = str.length - 1; index >= 0; index--) {
  reversedString += str[index];
}

console.log(reversedString);

// Multiplication Table Write a function that takes a number as input and prints the multiplication table for that number from 1 to 10 using a loop.
// 5 x 1 = 5

const num = 5;

for (let index = 1; index <= 10; index++) {
  console.log(`${num} x ${index} = ${num * index}`);
}

// Task 14: Count Vowels Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) using a loop and conditional statements.

const word = "ALabas";
const vowels = ["a", "e", "i", "o", "u"];

const lowercaseWord = word.toLowerCase();

let totalVowels = 0;

for (let index = 0; index < lowercaseWord.length; index++) {
  if (vowels.includes(lowercaseWord[index])) {
    totalVowels++;
  }
}
console.log(totalVowels);

const userInput = "Obuolys";
switch (userInput) {
  case "Bulvė":
  case "Kopūstas":
  case "Česnakas":
  case "Svogūnas":
  case "Morka":
    console.log("Daržovė");
    break;
  case "Obuolys":
  case "Kriaušė":
  case "Avietė":
  case "Braškė":
  case "Vynuogė":
    console.log("Vaisius");
    break;
  default:
    console.log("Nei daržovė, nei vaisius");
}
let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = "Sekmadienis";
    break;
  case 1:
    weekDay = "Pirmadienis";
    break;
  case 2:
    weekDay = "Antradienis";
    break;
  case 3:
    weekDay = "Trečiadienis";
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    break;
  case 5:
    weekDay = "Penktadienis";
    break;
  case 6:
    weekDay = "Šeštadienis";
    break;
}
console.log(weekDay);
const car = "Audi";
switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Lamborghini":
  case "Porsche":
    console.log("VW group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMW group");
    break;
  default:
    console.log("Nei VW group, nei BMW group");
}
// const clientAge = 16;
// const legalAge = 18;
// clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

const clientAge = 16;
const legalAge = 18;
clientAge < 0 || clientAge > 120
  ? console.log("Invalid age")
  : clientAge >= legalAge
  ? console.log("Can drive")
  : console.log("Can't drive");

const phone = "iPhone";
const isIphoneUser = phone === "iPhone";
console.log(isIphoneUser);

const name = "John";
const count = 10;
for (let i = 0; i < count; i++) {
  console.log(name);
}

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
