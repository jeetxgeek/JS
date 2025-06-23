function one(){
    const name = "John"; // Local scope

    function two() {
        const age = 30; // Local scope
        console.log("Name:", name); // This will log "Name: John", as 'name' is accessible in this scope
    }
    //console.log(age); // This will throw a ReferenceError: age is not defined, as 'age' is not accessible in this scope and the further execution will not happen
    
    two(); // Call the inner function to access 'name'
}

one(); // Call the outer function to execute the inner function
// The inner function 'two' can access the variable 'name' from the outer function 'one'
// but not the other way around. This is an example of lexical scoping in JavaScript.


//***************************************INTERESTING********************* */
addone(5); // This will log 6, as 'addone' is a function that adds 1 to the input number
// Functions can be defined in different ways in JavaScript, and they can be used to encapsulate logic and create reusable code blocks.
function addone(num) {
    return num + 1
}

addtwo(5); // This will log 7, as 'addtwo' is a function that adds 2 to the input number
// Functions can also be defined using function expressions, which allows for more flexibility in how they are used.    
//addtwo(5) will generate an error if the function is not defined before it is called, as it is a function expression and not a function declaration.
// Function expressions are not hoisted, so they must be defined before they are called.
const addtwo = function(num) {
    return num + 2
}
