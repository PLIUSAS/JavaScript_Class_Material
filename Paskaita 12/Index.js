// Number
const x = 3.65;
console.log(typeof x.toString()); // pavercia i stringa
console.log(x.toFixed()); // apvalina skaiciu
console.log(x.toPrecision()); // toks pat kaip toFixed

const xString = "3.78";

console.log(Number.parseFloat(xString)); // parseFloat konvertuoja stringa i number
console.log(Number.parseInt(xString)); // Sveikas skaicius
console.log(Number.parseInt("asd")); // Noth a number (NaN)
console.log(Number.isNaN(NaN)); // True // False
console.log(typeof +"3.09");

// Stringai

const catsName = "Pukis";
console.log(catsName.includes("u")); // Patikrinam ar stringo viduje yra u raide
console.log(catsName.endsWith("s")); // Patikrinam ar baigesi su s raide
console.log(catsName.length); // Kokio ilgumo yra musu stringas
console.log(catsName.indexOf("k")); // Patikrinam ar yra raide viduje stringo
console.log(catsName.slice(1, 3)); // Istraukem dvi raides
console.log(catsName.split("")); // Atskiria raides kaip sakant sukapoja stringa arba istrauke ta raide ir sukapoja stringa
console.log(catsName.replace("Pukis", "kazkas kito")); // Pakeicia zodi i kita zodi pirma zodi, galimi zodziai pirmas tik stringe
// console.log(catsName.replaceAll("Pukis", "kazkas kito")); // Pakeicia viska i kita zodi, galimi zodziai visi stringe

// Boolean True // False
const isTrue = true;
console.log(typeof isTrue.toString()); // Pakeitem i stringa

const person = {
  name: "Andrius",
  age: 30,
};

// Objektai

const person1 = Object.freeze({
  // freeze - uzsaldytas objektas
  name: "Tadas",
  age: 40,
  kazkas: {
    kazkas1: 30,
  },
});

person1.age = 20;
person1.lastName = "asdasdas";
person1.kazkas.kazkas1 = 60;
// Kaip objekto viduje bandai pakeisti neleidzia. Bet kai objektas objekto viduje ir nori pakeisti tai leidzia
console.log(person1);

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1)); // keys + values viename

const arr = [
  ["name", "vardas"],
  ["hasCar", true],
];
console.log(Object.fromEntries(arr)); // Is arejaus padarem objekta

// ND
const isLegalAge = true;

console.log(isLegalAge); // Atvaizduos kaip boolean
console.log(isLegalAge.toString()); // Atvaizduos kaip string

const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice)) {
  alert("Centų nereikia");
} else {
  alert("Centų prireiks...");
}

const milk1Price = 3.677; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milk1Price)) {
  alert("Centų nereikia");
} else {
  alert("Centų prireiks...");
}

alert(milkPrice.toFixed(2));
