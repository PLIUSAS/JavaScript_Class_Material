// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const number = [1, 2, 4, 5];
function findFirstMissingNumber(array) {
  const result =
    array.find((num, i) => {
      return ++num !== array[i + 1];
    }) + 1;
  console.log(result);

  const lastSequentialIndex = array.findIndex((num, i) => {
    return ++num !== array[i + 1];
  });
  const gap = array[lastSequentialIndex + 1] - array[lastSequentialIndex];
  console.log(gap);
  let difference;
  let nums = 0;
  while (difference !== 1) {
    difference =
      array[lastSequentialIndex + 1] - (array[lastSequentialIndex] + 1) - nums;
    nums++;
  }
  console.log(nums, "nums");
}
// findFirstMissingNumber(number);

// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

function generateArray(num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.push(randomNumber);
  }
  // console.log(res);
}

// generateArray(50);

// Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

const holidays = [
  "2020, 01, 01",
  "2020, 02, 16",
  "2020, 07, 06",
  "2020, 12, 25",
];

function isHoliday(date) {
  return !!holidays.find(
    (dateString) => dateString.toString() === new Date(dateString).toString()
  );
}
// console.log(isHoliday(new Date(2020, 0, 1)));

// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}];

const people = [
  { name: "Xlfredas", age: 25 },
  { name: "Jonas", age: 25 },
  { name: "Kasparas", age: 20 },
];
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age); // a - mažiausia. b - didžiausia.
  arr.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });
  console.log(arr);
}
// sortByAge(people);

// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const isLarger = (a, b) => a + b > 100;

// console.log(isLarger(10, 50));

// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

// Pirmas variantas
const numbers1 = [-100, -1, -5, 10, 0, 11];
function largestNegativeNumber(arr) {
  const negatives = arr.filter((x) => x < 0);
  console.log(Math.max(...negatives));

  // Antras variantas
  const sorted = [...negatives].sort((x, y) => y - x);
  console.log(sorted[0]);

  // Trecias variantas

  const num = arr.reduce((acc, x) => {
    if (x < 0) {
      return x > acc ? x : acc;
    }
    return acc;
  }, Number.NEGATIVE_INFINITY);
  console.log(num);
}
largestNegativeNumber(numbers1);
