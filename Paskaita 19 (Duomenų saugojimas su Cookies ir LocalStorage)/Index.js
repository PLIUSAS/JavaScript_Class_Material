// SessionStorage - Turi Key ir Value. Egzistuoja tik tam paciam Chrome lanke. Atidarius kita langa jis nebe egzistuoja.
//LocalStorage - Turi Key ir Value. Egzistuoja visalaika.
//JSON.Stringify - Konvertuoja į stringa PVZ; Iš Array padaro stringa
//JSON.parse - Parsina atgal į kažkokį objekta PVZ: Iš stringo padaro  Array

// document.cookie = "name=Marius; expires=Thu, 01 Jan 2024 00:00:00 GMT";

console.log(document.cookie);
console.log(document.cookie.split("=")[1]);

sessionStorage.setItem(
  "manoSessionStorage",
  JSON.stringify({
    labas: "labas",
  })
);
const x = sessionStorage.getItem("manoSessionStorage");
const obj = JSON.parse(x);
console.log(obj);
console.log(x);

localStorage.setItem("name", "Marius");
console.log(localStorage.getItem("name", "Marius"));
// localStorage.removeItem("name");

// sessionStorage.removeItem("manoSessionStorage");
