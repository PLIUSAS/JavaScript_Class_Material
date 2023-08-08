const person = {
  age: 26,
  name: "laurynas",
  car: {
    make: "BMW",
    year: 2000,
  },
  pets: ["Pukis", "Reksas"],
  sayHello: () => {
    console.log("Hello ");
    console.log(this, "arrow function");
  },
  sayGoodbye: function () {
    console.log("Bye", this.name);
    this.name = "Tadas";
    console.log(this.name);
  },
};
console.log(person.age);
person.age = 40;
console.log(person.age);
console.log(person.car.make);
person.sayHello();

delete person.age;
person.lastName = "Paliakas";
console.log(person);
console.log(this);
person.sayGoodbye();

const person2 = {
  ...person,
  lastName: "Kazkas kito",
};

console.log(person2);

// function augintinis() {
//   this.name = "Marius";
//   console.log(this);
// }
// augintinis();

const obj = {
  name: "Vytautas",
  age: 15,
};

function changeObject(objektas) {
  const copy = JSON.parse(JSON.stringify(objektas));
  copy.name = "Migle";
}

changeObject(obj);
console.log(obj);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // su This priskyrėm name ir age reikšmes.
  }
  sayHello() {
    console.log(`"hello" ${this.name}`);
  }
  sayBye(name) {
    console.log(`bye ${name}`);
  }
}

const marius = new Person("Laurynas", 20);
const rima = new Person("Rima", 99);
console.log(marius);
console.log(marius.name);
console.log(rima);
marius.sayHello();
rima.sayHello();
rima.sayBye("Viktoras");

const car = {
  doors: {
    doors: 2,
    doors: 4,
  },
  color: {
    Color: "Black",
    Color: "White",
    Color: "Red",
    Color: "Blue",
  },
  brand: {
    Brand: "Audi",
    Brand: "BMW",
    Brand: "Mercedes-Benz",
    Brand: "Volkswagen-Golf",
  },
};
console.log(car);
console.log(car.doors);
console.log(car.color);
console.log(car.brand);

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   // const name = document.querySelector("input").value;
//   // const surname = document.querySelector("input:nth-of-type(2)").value;

//   // console.log(name, surname);
//   const person = {
//     name: document.querySelector("input").value,
//     surname: document.querySelector("input:nth-of-type(2)").value,
//   };

//   console.log(person);
// });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const age = Number(e.target.elements.age.value);
  const islegalAge = age >= 18;

  const person = {
    name: name,
    isLegal: islegalAge,
  };
  console.log(person);
});
