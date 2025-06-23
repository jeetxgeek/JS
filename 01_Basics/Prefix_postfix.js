//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"