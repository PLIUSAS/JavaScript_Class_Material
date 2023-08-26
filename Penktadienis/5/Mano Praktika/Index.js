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
