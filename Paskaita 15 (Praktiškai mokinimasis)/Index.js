const n1 = function number1(number) {
  let x = 60;
  console.log(number * x + " second");
};
// Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
// n1(100);

const n2 = function age(ages) {
  let x = 365;
  console.log(ages * 365 + " Days Live");
};

// Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
// n2(100);

function square(arrow) {
  console.log(arrow ** 2);
}

//Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
// square(4);
function triangle(widht, height) {
  console.log((widht * height) / 2);
}

// Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
// triangle(50, 50);

const lastletter = (name) => name.charAt(name.length - 1);
// Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
// console.log(lastletter("karka"));

const text = (name) => name.split("").reverse().join("").toLowerCase();
// Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
// console.log(text("laurynas"));

const nums = [-1, -100, -5, 10, 0, 11];
const numbers = (nums) => nums.filter((x) => x < 0).sort((a, b) => b - a)[0];
// console.log(numbers(nums));
// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const randomNumbers = (quant) => {
  const generatedNums = [];
  for (let i = 0; i < quant; i++) {
    generatedNums.push(Math.floor(Math.random() * 10) + 1);
  }
  return generatedNums;
};
// console.log(randomNumbers(3));
// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const sumOverHundred = (n1, n2) => n1 + n2 > 100;
// console.log(sumOverHundred(10, 100));
// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const fn = (array) =>
  array
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => (a.age - b.age ? 1 : -1));
// console.log(
//   fn[
//     ({ name: "Alfredas", age: 25 },
//     { name: "Jonas", age: 25 },
//     { name: "Kasparas", age: 20 })
//   ]
// );
//     Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) => new Date(holiday).getDate() === date.getDate()
  );
}
// console.log(isItHoliday(new Date("2020-05-25")));
// Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;
console.log(missingNumber([1, 2, 4, 5]));
// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
