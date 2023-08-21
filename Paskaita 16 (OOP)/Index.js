class Book {
  // Susikurem klase vardu Book per kuria susikursim objekta.
  constructor(title, year, id, author) {
    this.title = title;
    this.year = year;
    this.id = id;
    this.author = author;
  }

  logTitle() {
    // LogTitle tai yra klases medotas.
    console.log(this.title);
  }
}
// const altoriuSesely = new Book("Altoriu Sesely");

// altoriuSesely.logTitle(); // Pirmas metodas isikviesti klase
// console.log(altoriuSesely.title); // Antras metodas isikviesti klase

// const kvepalai = new Book("Kvepalai");

// kvepalai.logTitle();

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }
  addNewBooks(book) {
    this.books.push(book);
  }
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
  removeBookById(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    } else {
      console.log("Knygos su tokiu id nera");
    }
  }
}

const martynoMazvydo = new Library("Martyno Mazvydo", "prie seimo");

const kvepalai = new Book("Kvepalai", 2000, 1, "kazkoks autorius");
const altoriuSesely = new Book("altoriu Sesely", 1990, 2, "kazkas");

martynoMazvydo.addNewBooks(kvepalai);
martynoMazvydo.addNewBooks(altoriuSesely);

martynoMazvydo.removeBookById(1);

class Animal {
  // Pirma klase (Animal)
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log("i am breathing");
  }
}
class Mamal extends Animal {
  // Pirma klase sujungta (extends) su antra klase (Mamal)
  constructor(typeoOfDrink, name) {
    super(name);
    this.typeoOfDrink = typeoOfDrink;
  }
  drink() {
    console.log("I am drinking milk");
  }
}

const karve = new Mamal("Water", "Birute");
karve.breathe();
karve.drink();
console.log(karve.typeoOfDrink);
console.log(karve.name);

// Užduotis 1-2 vienu metu sujungtai padaryti
class Car {
  constructor(brand, model, engine, price) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
    this.getPrice = function () {
      let additionalPrice = 0;
      if (this.engine === "Electric") {
        additionalPrice = 10000;
      } else if (this.engine === "diesel") {
        additionalPrice = 5000;
      }
      return this.basePrice + additionalPrice;
    };
    this.TurnOn = function () {
      alert("vrooom! ");
    };
  }
}
const bestCar = new Car("BMW", " M4 ", "diesel", 40000);
bestCar.TurnOn();
console.log(bestCar.getPrice());
const fastesCar = new Car("Bugatti", " Chiron ", "Electric", 500000);
fastesCar.TurnOn();
console.log(fastesCar.getPrice());
