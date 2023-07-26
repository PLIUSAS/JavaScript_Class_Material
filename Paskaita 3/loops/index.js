let num = 10;

while (num > 17) {
    console.log(num);
    ++num;
}

let num1 = 10;
do {
    console.log(num1);
    num1++;
} while (num1 > 17);


for (let i = 0; i < 10; i += 5) {
    console.log(i);
}
const zmones = ['Vyrautas', 'Migle', 'Tautvydas']

for (let i = 0; i < zmones.length; i++){
    console.log("labas, " + zmones [i]);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

let laughter = '';
const userNumber = prompt('Įvesk skaiciu')

for (let i = 0; i < userNumber; i++) {
    laughter += 'ha';
}

console.log(laughter);

for (let i = 9; i >= 1; i--) {
    console.log('Hello ' + i);
}
const amžius = 21;
for ( let amžius = 21; amžius - 2021; i++){
    console.log(amžius - 2021);
}