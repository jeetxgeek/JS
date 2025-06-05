

// An IIFE (Immediately Invoked Function Expression) runs as soon as it is defined.
// It helps create a local scope and avoids polluting the global namespace.
// Immediately Invoked Function Expression

(function chai() {
    console.log(`DB CONNECTED`);
})();



// Syntax for IIFE (Immediately Invoked Function Expression):
// (function() {
//     // code to execute immediately
// })();
//
// Or with a named function:
// (function functionName() {
//     // code to execute immediately
// })();
//
// Or using arrow function syntax:
// (() => {
//     // code to execute immediately
// })();

//';'  Note: The semicolon at the end is optional but can help avoid issues with minification or concatenation.it defines where an iife ends 
// Example of an IIFE with parameters:
(function (a, b) {
    console.log(`Sum: ${a + b}`);
})(5, 10); // Outputs: Sum: 15

((name) => {
    console.log(`Hello, ${name}!`);
})('Alice'); // Outputs: Hello, Alice!  