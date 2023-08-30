// Isiskyriau su panele pries 5 mėnesius, man pasakė taip jeigu pasikeisiu bus su manim toliau o jeigu ne tada paliks mane (susiras kita)

let mylesiu = new Promise((resorve, reject) => {
  // Pazadas ką padarysim
  setTimeout(() => resorve(), 1000); // Per 1000 secundziu ateina zinute
  //   if (Petras.tampa.geras) { // Jeigu tapsiu geresniu tada bus su manim
  //     resorve();
  //   } else { // Jeigu netapsiu geresniu paliks mane (susiras kita)
  //     reject();
  //   }
});

// let fetch = new Promise((resorve, reject) => {
//   console.log("EIK Į URL");
//   console.log("SIŲSK TĄ JSONą");
//   if (File.ok) {
//     resorve(file);
//   } else {
//     reject(error);
//   }
// });

// mylesiu
//   .then(() => console.log("susitaikom"))
//   .catch(() => console.log("radau kitą, geresnį"));

// fetch('url') // fetch - Prižada jog atsius faila. Pirmas
// .then(function (file) {return file.json()}) // Pirmas .then Pažadas jog sėkmingai korvertuosime faila.
// .then(function(pasiimuFileIsVirsaus)){console.log(pasiimuFileIsVirsaus.results[0])}; // Antras .then Gauna faila ir su juo konsologina.

// fetch("url")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Daugiau apie Pažadus/Promises asynch/await - https://javascript.info/async

// 1.Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut.

const pazadas = new Promise((resolve, reject) => {
  setTimeout(resolve(), 5000);
});
pazadas.then(() => alert("Veikia"));
console.log(
  "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
);

// 2.Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.
const pazadas1 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadas1
  .then(() => alert("Veikia"))
  .catch(() => alert("Oops, pažadas buvo atmestas"));

//   Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

const pazadasx = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadasx
  .then(() => "This is message")
  .then((message) => alert(message))
  .catch(() => alert("Oops, pažadas buvo atmestas"));
