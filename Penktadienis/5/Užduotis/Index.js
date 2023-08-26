const button = document.createElement("button");
button.textContent = "Hello!";
document.body.appendChild(button);
button.addEventListener("click", () => {
  const p = document.createElement("p"); // Funkcijoje susikuriame elementa
  document.body.appendChild(p); // padarom jog jisai pasirodytu
  p.textContent = "Ko žiuri obuoly ?"; // elemento teksto vidus
  let repeateText = p.repeate(); // sukuriam elementa ir padarom kad jisai atsispindetu dar karta paspaudus button
  repeateText.appendChild(p); // padarom kad teksto atsispindejimas pasirodytu

  //   button.remove();
});
