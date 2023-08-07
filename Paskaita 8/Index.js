let ptextContent = document.querySelector("p").textContent;
const p = document.querySelector("p");
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", clickHandler);

function clickHandler() {
  ptextContent = "ate";
  const text = "Kazkas kito";
  p.textContent = text.slice(0, text.length - 1);
  // body.removeChild(p);
  p.remove();
}

const input = document.querySelector("input");

input.addEventListener("keydown", inputHandler);

function inputHandler(e) {
  if (e.key === "Enter") {
    const p2 = document.createElement("p");
    p2.textContent = e.target.value;

    const p3 = document.createElement("p");
    p3.textContent = e.target.value + "antras";
    body.prepend(p2, p3);
  }
}

clickHandler("labas");

const number = 100;

// if (number % 2 === 0) {
//   console.log("lyginis");
// } else if (number > 50) {
//   console.log("didesnis nei 50");
// } else if (number < 100) {
//   console.log("mazesnis nei 100");
// }

function doStuff() {
  let rez = "";
  if (number % 2 === 0) {
    rez += "lyginis";
  }

  if (number > 50) {
    rez += "didesnis nei 50";
  }

  if (number < 100) {
    rez += "mazesnis nei 100";
  }

  return rez;
}
console.log(doStuff());
