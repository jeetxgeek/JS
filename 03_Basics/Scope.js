// Scope in JavaScript

var c = 100; // Global scope
let a = 200; // Block scope

console.log(a); // This will log 200, as 'a' is block-scoped but defined in the global scope


if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner a:", a); // This will log 10, as 'a' is block-scoped and defined in this block
    
}

console.log("Outer a:", a); // This will log 200, as 'a' is block-scoped but defined in the global scope


//console.log(a); // This will throw a ReferenceError: a is not defined, as 'a' is block-scoped due to 'let'

//console.log(b);// 'b' is also block-scoped due to 'const', so it will throw a ReferenceError as well

//console.log(c);// 'c' is function-scoped due to 'var', so it will log 30

console.log(c); // This will log 30, as 'c' is function-scoped due to 'var' 

// the value of c is available in block scope, but value oc c in block is not available in global scope
