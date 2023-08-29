console.log("Failo pradžia");

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) {
      resolve("123");
    } else {
      reject("Failed");
    }
  }, 2000);
});

// prom
//   .then((res) => {
//     console.log(res, "then");
//     return res + " Labas";
//   })
//   .then((res) => {
//     console.log(res, "then 2");
//   })
//   .then((res) => {
//     console.log(res, "then 3");
//   })
//   .catch((err) => {
//     console.log(err, "catch");
//   })
//   .finally(() => {
//     console.log("finally");
//   });

console.log("failo pabaiga");

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) {
      resolve("Resolved");
    } else {
      reject("Failed");
    }
  }, 1000);
});

async function getData() {
  try {
    console.log("Funkcijos Pradzia");
    const res = await prom2;
    console.log(res);
    console.log("Funkcijos Pabaiga");
  } catch (error) {
    console.log(error, "catch dalis");
  }
}

getData();
