document.body.style.background = "rgba(169, 243, 255, 0.5)";

// Main block

const main = document.createElement("main");
main.style.background = "white";
main.style.width = "25%";
main.style.margin = "7rem auto";
main.style.padding = "1rem";
main.style.textAlign = "center";
main.style.borderRadius = "1rem";
document.body.append(main);

// Image
const img = document.createElement("img");
img.src =
  "https://archive.smashingconf.com/sf-2018/content/02-speakers/03-trent-walton/trent-walton.jpg";

img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFit = "cover";
img.style.borderRadius = "50%";
img.style.padiing = "0.5rem";
img.style.border = "5px solid white";
img.style.marginTop = "-6.5rem";
img.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.8)";
main.append(img);

// Text

const name = document.createElement("h1");
name.textContent = "Trent Walton";
name.style.marginTop = "0";
main.append(name);

// Text

const p = document.createElement("p");
p.textContent = "Founder & 1/3 of @paravelinc";
p.style.fontSize = "1.2rem";
p.style.color = "gray";
p.style.marginBottom = "0";
main.append(p);

const text = document.createElement("p");
text.textContent = "Austin, TX";
text.style.fontSize = "1.2rem";
text.style.color = "gray";
text.style.marginTop = "5px";
main.append(text);
