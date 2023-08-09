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
  //   pToDelete.remove(); //PVZ Žiurėk konsole
  div.innerHTML = ""; // PVZ Žiurėk konsole ištrinka viską ir h1 texta
});
