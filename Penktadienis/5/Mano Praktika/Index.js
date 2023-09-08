const button = document.createElement("button");
button.textContent = "Hello!";
document.body.appendChild(button);
button.addEventListener("click", () => {
  button.style.effect = "dropshadow(0)";
  button.style.margin = "0px 10px";
  button.style.width = "100px";
  button.style.height = "25px";
  button.style.color = "white";
  button.style.backgroundColor = "black";
  const p = document.createElement("p");
  p.style.margin = "5px 10px";
  p.style.fontSize = "25px";
  p.style.color = "red";
  document.body.appendChild(p);
  p.textContent = "Ko žiuri obuoly ??";
  let repeateText = p.repeate(); // Pasikartojimas
  repeateText.appendChild(p);
});

const people = [
  {
    name: "Florin",
    age: 18,
  },
  {
    name: "Laurynas",
    age: 15,
  },
  {
    name: "Deividas",
    age: 21,
  },
];
const adult = people.filter((people) => people.age >= 20);
// console.log(adult);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}
// console.log(even);

const number = [1, 2, 3, 1, 2, 3, 5, 4, 6, 1, 2, 3];
const nums = number.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
// console.log(nums);
