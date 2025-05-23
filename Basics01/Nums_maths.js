const scor = 40
console.log(scor);


const num = new Number(100)
console.log(num);

console.log(num.toString().length);
console.log(num.toString(2)); // binary
console.log(num.toString(8)); // octal
console.log(num.toString(16)); // hexadecimal
console.log(num.toString(36)); // base 36
console.log(num.toString(2).length); // binary length
console.log(num.toString(8).length); // octal length

console.log(num.toFixed(2)); // 100.00

const num1 = 1112.8869

console.log(num1.toExponential(2)); // 1.11e+3
console.log(num1.toPrecision(5)); // 1112.9
console.log(num1.toPrecision(3)); // 1.11e+3
console.log(num1.toPrecision(2)); // 1.1e+3

const num2 = 100000
console.log(num2.toLocaleString('en-IN')); // 1,00,000

// *************************Math********************************************
console.log(Math);

console.log(Math.PI); // 3.141592653589793

console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476

console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// random number between 0 and 1
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100) + 1); // random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1); // random number between 1 and 100
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20

