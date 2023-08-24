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

localStorage.setItem("name", "Marius");
console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");

// sessionStorage.removeItem("manoSessionStorage");
