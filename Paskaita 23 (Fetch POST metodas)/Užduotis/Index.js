// BASE URL = https://olive-bead-glazer.glitch.me
// 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
const baseUrl = "https://olive-bead-glazer.glitch.me/";
async function getCar() {
  const response = await fetch(host + "/people");
  if (response.ok) {
    const car = await response.json();
    console.log(car);
  }
}
// getCar();
// 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
