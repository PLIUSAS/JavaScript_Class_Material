// 1 Užduotis

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const years = document.getElementById("years").value;

//   let bonus = 50;
//   if (years >= 10) {
//     bonus += 50;
//   }
//   if (years >= 20) {
//     bonus += 100;
//   }

//   document.getElementById("output").innerText = `Jūsų premija: ${bonus}`;
// });

// 2 Užduotis

// function isLeapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }
// function handleFormSubmit(event) {
//   event.preventDefault();
//   const year = Number(document.getElementById("year").value);
//   const outputElement = document.getElementById("output");
//   if (isLeapYear(year)) {
//     outputElement.textContent = "Metai keliamieji";
//   } else {
//     outputElement.textContent = "Metai nėra keliamieji";
//   }
// }
// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// 3 Užduotis

// function convertToFarenheit(event) {
//   const celciusInputValue = event.target.value;
//   const outputElement = document.getElementById("output");
//   if (celciusInputValue) {
//     const celcius = Number(celciusInputValue);
//     const farenheit = (celcius * 1.8 + 32).toFixed(1);
//     outputElement.innerText = farenheit;
//   } else {
//     outputElement.innerText = "";
//   }
// }

// document
//   .getElementById("celcius")
//   .addEventListener("input", convertToFarenheit);

// 4 Užduotis

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const didAgreeToGetLetter = document.getElementById("checked").checked;
//   const outputElement = document.getElementById("output");
//   outputElement.textContent = didAgreeToGetLetter
//     ? `El. paštas ${email} sėkmingai užregistruotas`
//     : "Registracija nesėkminga";
// }

// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// 5 Užduotis

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const numberOfElements = Number(
//     document.getElementById("numberOfElements").value
//   );

//   const list = document.getElementById("list");
//   list.innerHTML = "";
//   for (let i = 0; i < numberOfElements; i++) {
//     const listItem = document.createElement("li");
//     listItem.innerText = name;
//     list.append(listItem);
//   }
// }
// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// 6 Užduotis
// function drawTriangle(event) {
//   event.preventDefault();
//   let triangleSize = Number(document.getElementById("triangleSize").value);
//   const outputElement = document.getElementById("output");

//   let output = "";
//   for (i = 0; i < triangleSize; i++) {
//     for (j = 0; j <= i; j++) {
//       output += "*";
//     }
//     output += "<br>";
//     outputElement.innerHTML = output;
//   }
// }

// document.querySelector("form").addEventListener("submit", drawTriangle);

// 7 Užduotis

// function drawL(event) {
//   const size = Number(event.target.value);
//   const outputElement = document.getElementById("output");

//   let output = "";
//   for (i = 0; i < size - 1; i++) {
//     output += "L/C<br>";
//   }
//   for (i = 0; i < size; i++) {
//     output += "L/C";
//   }
//   outputElement.innerHTML = output;
// }

// document.getElementById("size").addEventListener("input", drawL);

// 8 Užduotis

// function drawL(event) {
//   const size = Number(event.target.value);
//   const outputElement = document.getElementById("output");

//   if (size < 2) {
//     outputElement.innerHTML = "C letter size must be at least 2";
//     return;
//   }
//   let output = "";
//   for (i = 0; i < size; i++) {
//     output += "C";
//   }
//   output += "<br>";
//   for (i = 0; i < size - 2; i++) {
//     output += "C<br>";
//   }
//   for (i = 1; i < size; i++) {
//     output += "C";
//   }
//   outputElement.innerHTML = output;
// }

// document.getElementById("size").addEventListener("input", drawL);

// 9 Užduotis
// function addNameToList(event) {
//   const name = event.target.value.trim();
//   const outputElement = document.getElementById("output");
//   if (name) {
//     outputElement.innerText += `${name}, `;
//   }
// }

// document.getElementById("name").addEventListener("blur", addNameToList);

// 10 Užduotis

// function alertNearestNumber(n1, n2) {
//   if (Math.abs(100 - n1) > Math.abs(100 - n2)) {
//     alert(n2);
//   } else {
//     alert(n1);
//   }
// }

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const n1 = Number(document.getElementById("number1").value);
//   const n2 = Number(document.getElementById("number2").value);
//   alertNearestNumber(n1, n2);
// }

// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// 11 Užduotis

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// function guessNumber(event) {
//   event.preventDefault();
//   const guessedNumber = Number(document.getElementById("guess").value);
//   if (randomNumber === guessedNumber) {
//     alert("Atspėjai");
//   } else {
//     alert("Neatspėjai");
//   }
// }

// document.querySelector("form").addEventListener("submit", guessNumber);

// 12 Užduotis

let counter = 0;
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

function guessNumber(event) {
  event.preventDefault();
  counter++;
  const guessedNumber = Number(document.getElementById("guess").value);
  if (randomNumber === guessedNumber) {
    alert(`Atspėjai iš ${counter} karto`);
  } else {
    alert("Neatspėjai");
  }
}

document.querySelector("form").addEventListener("submit", guessNumber);
