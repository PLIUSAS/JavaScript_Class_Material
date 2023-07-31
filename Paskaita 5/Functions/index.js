function sayHello(name, age) {
    console.log("Hello " + name + age);
    console.log("Youre age is " + age);
}
sayHello("Marius ", 20);

sayHello ("Andrius ");

const num = 12;


function AddNumber(x, y) {
    sayHello("Marius ", 20);
    const sum = x + y;
    console.log(num);

    function Hello() {
        console.log("Inside a function");

    }
    Hello ();

    return sum; // Už 'return' niekas daugiau nevyksta. 'Return' Sustabdo/nusako funkcijos veikimą. 
}
const sum = AddNumber(15, 25);
console.log(sum);

console.log(AddNumber(6, 9));

function findBiggest(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(findBiggest (7, 6)); 

function CheckAge(Age) {
    return Age > 18 ? True : confirm("Ar Tikrai ?");
    // if (Age > 18) {
    //     return true;
    // } else {
    //     return confirm("Ar tikrai?")
    // }
}
// console.log(CheckAge(17));

function min(x, y) {
    if (x < y) { // x mažiau uz y
        return x;
    } else if (y < x) { // y mažiau uz x
        return y; 
    }   else {
        return ("Jie yra lygus")
    }
}
console.log(min (1, -6)); // y yra mažesnis uz x dėlto gaunasi -6;
console.log(min (1, 1)); // x ir y nėra neivienas už kita mazesni tada konsolina ''Jie yra lygus'';

const func1 = function (name) {
    console.log("Hello " + name);
};

func1 ("Vytautas");
func1 ("Laurynas");

const arrowFuction = (name) => {
    console.log(name + " Hello");
}
arrowFuction ("Laurynas");

const SumFunc = (x, y) => (x + y);

console.log(SumFunc(5, 7));


