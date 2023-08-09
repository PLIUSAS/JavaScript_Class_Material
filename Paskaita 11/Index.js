const div = document.querySelector("div");

document.querySelector("button").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "labas";
  p.style.fontSize = "20px";
  console.log(p);
  div.prepend(p); // PVZ Žiurėk konsole
  //   div.append("asdasdasd"); // PVZ Žiurėk konsole
  //   div.appendChild(p); // PVZ Žiurėk konsole
});

document.querySelector("#delete").addEventListener("click", () => {
  const pToDelete = document.querySelector("p");
  console.log("HTML CLEANE");
  //   pToDelete.remove(); //PVZ Žiurėk konsole
  div.innerHTML = ""; // PVZ Žiurėk konsole ištrinka viską ir h1 texta
  div.innerHTML = "<script> console.log('hello') </script>";
});

// Užduotis - lentekės užpildymas iš JS (Konstantos) failu tiesiai į HTML.
const people = [
  { name: "John Doe ", age: 30, city: " New York" },
  { name: "Jane Smith ", age: 25, city: " Los Angeles" },
  { name: "Bob Johnson ", age: 40, city: " Chicago" },
  { name: "Emily Williams ", age: 28, city: " Houston" },
];

const tbody = document.querySelector("tbody");
for (let i = 0; i < people.length; i++) {
  const tr = document.createElement("tr"); // Table lentelės eilutės sukurimas atskirai kiekvienam people eilutei.

  const tdName = document.createElement("td"); // Konstantu suvienijimas su const people Vardu
  const tdAge = document.createElement("td"); // Konstantu suvienijimas su const people Age
  const tdCity = document.createElement("td"); // Konstantu suvienijimas su const people City

  tdName.textContent = people[i].name; // Konstantu sujungimas elementais
  tdAge.textContent = people[i].age; // Konstantu sujungimas elementais
  tdCity.textContent = people[i].city; // Konstantu sujungimas elementais

  tr.append(tdName, tdAge, tdCity);
  tbody.append(tr); // Table body atsiranda tdName, tdAge, tdCity elementai. tr sukurėm eilute ir joje supildėm lentele. NAME // AGE // CITY
}
