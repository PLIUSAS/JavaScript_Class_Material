const x = 50;
const y = 10;

const suma = x + y;
console.log(suma);

const skirtumas = x - y;
console.log(skirtumas);

const daugyba = x * y;
console.log(daugyba);

const dalyba = x / y;
console.log(dalyba);

const arr = [suma, skirtumas, daugyba, dalyba];
console.log(arr[2]);

const obj = {
    suma: suma, 
    skirtumas: skirtumas, 
    daugyba: daugyba, 
    dalyba: dalyba,
};
console.log(obj.skirtumas);