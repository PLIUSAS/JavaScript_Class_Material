// Inkapsuliacija (objekto vidiniai duomenys yra slepiami ir
// jais galima manipuliuoti tik naudojant objekto viešus metodus);

class Car {
  static test = "123";
  #make;
  constructor(make, year) {
    this.#make = make;
    this.year = year;
  }

  static compareYears(year1, year2) {
    return year2 > year1;
  }

  getMake() {
    return this.#make;
  }

  setMake(make) {
    this.#make = make.trim();
  }
}

// Abstrakcija (objekto nepriklausomumas nuo išorinių sudedamųjų dalių);

class Person {
  #age;
  #name;
  constructor(age, name) {
    this.#age = age;
    this.#name = name;
  }

  walk() {
    console.log(`${this.#name} is walking`);
  }
}

const person1 = new Person(20, "Marius");

person1.walk();

// Paveldėjimas (klasė yra kitos klasės konkretizacija);

class Shape {
  static test = "100";
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Triangle extends Shape {
  static testTriagle = "200";
  constructor(color, height) {
    super(color);
    this.height = height;
  }

  sayHello() {
    console.log("hello from triangle");
  }
}

const tr = new Triangle("red", 100);
const sh = new Shape("blue");

console.log(Triangle.test);
sh.sayHello();
tr.sayHello();
console.log(tr.color);

// Polimorfizmas (galimybė dirbti su objektu nežinant jo tikslaus tipo bei struktūros).

class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class Tractor extends Vehicle {
  constructor(fuel) {}
  startEngine() {
    console.log("Tractor engine started");
  }
}

class Bike extends Vehicle {
  startEngine() {
    console.log("Bike engine started");
  }
}

const veh = new Vehicle();
const tra = new Tractor();
const bk = new Bike();

const vehicles = [veh, tra, bk];

vehicles.forEach((v) => {
  v.startEngine();
});
