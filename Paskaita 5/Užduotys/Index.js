// function alertName(name) {
//     alert(name);
//   }
//   alertName('Laurynas');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  console.log(generateRandomNumber());
  
  // 3.
  function getNameAndSurnameLength(name, surname) {
    return name.length + surname.length;
  }
  console.log(getNameAndSurnameLength('John', 'Snow'));
  
  // 4.
  function getLetterByIndex(index) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet[index];
  }
  console.log(getLetterByIndex(0));

  // 5.
  function calculate(n1, n2, operator) {
    switch(operator){
      case 'sum':
        return n1 + n2;
      case 'sub':
        return n1 - n2;
      case 'div':
        return n1 / n2;
      case 'multi':
        return n1 * n2;
    }
  }
  console.log(calculate(5, 5, "multi"));

  // 6.
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
  
  function squareNumber(number) {
    return Math.pow(number, 2);
  }
  
  console.log(generateRandomNumber(0));
  console.log(squareNumber(5));



// document.querySelector('button').addEventListener('click', () => alert('Laurynas'));
// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('p').innerText = 'Some text about me';
// });

// let counter = 0;

// document.querySelector('button').addEventListener('click', () => {
//   counter++;
//   document.querySelector('h1').innerText = counter;
// });

// document.querySelector('p').addEventListener('copy', () => {
//   event.preventDefault();
//   alert("Can't copy this")
// });

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// document.querySelector('button').addEventListener('click', () => {
//   const randomNumber = generateRandomNumber();
//   document.querySelector('h1').innerText = randomNumber;
// });



// document.getElementById('adult').addEventListener('click', () => document.getElementById('output').innerText = 'Alus');
// document.getElementById('child').addEventListener('click', () => alert('nepilnametis - nieko neturim'));

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 3) + 1;
// }
// const randomNumber = generateRandomNumber();
// console.log(randomNumber);

// document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert('Nay'));
// document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'));
// document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'));

// document.body.addEventListener('click', () => {
//   const isButton = event.target.nodeName === 'BUTTON';
//   if (isButton) {
//     document.getElementById('output').innerText = 'Neklausote manęs';
//   }
// });

document.body.addEventListener('mousemove', () => document.getElementById('output').innerText = 'Kiek galima neklausyti?!');