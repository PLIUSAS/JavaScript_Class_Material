// console.log(window.innerHeight);

// document.body.style.backgroundColor = 'red';

// console.log(document.body.classList);
const h1 = document.getElementById("someId");
console.log(h1);
h1.style.color = "green";

const h1Querry = document.querySelector("#someId");
console.log(h1Querry);

const divs = document.getElementsByTagName("div");
console.log(divs);

const divsQuerry = document.querySelectorAll("div");
console.log(divsQuerry);

const divsWithClass = document.getElementsByClassName("pirma");
console.log(divsWithClass);

const divsWithClassQuerry = document.querySelectorAll(".pirma");
console.log(divsWithClassQuerry);

const divsWithName = document.getElementsByName("treciasDiv");
console.log(divsWithName);

const divWithNameQuerry = document.querySelectorAll('[name = "treciasDiv"]');
console.log(divWithNameQuerry);

const h2InDiv = document.querySelector("div > h2");
console.log(h2InDiv);

const obj = {
  name: "laurynas",
  lastName: "Paliakas",
  age: 26,
  parents: ["pirmas tevas", "asdfg"],
  car: {
    year: "2000",
    make: "audi",
    sedynes: { pirmaSedyne: "yra", antraSedyne: "nera" },
  },
};
console.log(obj.parents[0]);

console.log(obj.car.sedynes.antraSedyne);

const arr = [1, 2, 3];

arr[2] = 10;

console.log(arr);

console.log(obj.lastName);
obj.lastName = "lopas";
console.log(obj.lastName);

console.log(obj);
obj.address = "kazkoks kaimas";
console.log(obj);
delete obj.name;

console.log(obj);

const number = Math.abs(435);
console.log(number);
