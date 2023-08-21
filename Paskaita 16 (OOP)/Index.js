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

console.log(martynoMazvydo.findBookByTitle("kvepalai"));
martynoMazvydo.removeBookById(1);

console.log(martynoMazvydo);
