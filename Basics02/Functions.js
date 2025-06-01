 //function saymyname(params) {
//     console.log("j");
//     console.log("e");
//     console.log("e");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

//saymyname //reference to the function it is not called yet
//saymyname(); // calling the function

function add(a, b) {
    console.log(a + b );
     
}

const result = add(3, 5); // calling the function with arguments and storing the result in a variable

console.log("Result: ", result); // Output: Result: 8
// The function `add` takes two parameters `a` and `b`, and logs their sum to the console.




// add() // calling the function without arguments will return NaN (Not a Number)
// add(2, 3); // calling the function with arguments will return 5
// add(10, '20'); // calling the function with a number and a string will return 30 (string is converted to number)
// add('10', '20'); // calling the function with two strings will return "1020" (strings are concatenated)
// add(3,"a")

// add(3, null); // calling the function with a number and null will return 3 (null is converted to 0)
// add(3, undefined); // calling the function with a number and undefined will return NaN (undefined is not a number)
// add(3, true); // calling the function with a number and true will return 4 (true is converted to 1)

function addWithReturn(a, b) {
    return a + b; // using return to send the result back to the caller
}
const resultWithReturn = addWithReturn(3, 5); // calling the function with arguments and storing the result in a variable
//console.log("Result with return: ", resultWithReturn); // Output: Result with return: 8

function loginusermssg(username){
    if (!username) { // Check if username is falsy (undefined, null, empty string, etc.)
        // If no username is provided, log a message and return
        // This will prevent the function from executing further
        // and returning a message with an undefined username.
        console.log("please enter a username");
        return; // Exit the function if no username is provided
        
    }
    return ` ${username} just logged in`  
}

//console.log(loginusermssg("jeetesh")); // Output: jeetesh just logged in
//console.log(loginusermssg()); // Output: undefined just logged in
// If no argument is passed, the function will return "undefined just logged in" because the parameter `username` is undefined.

function login(username = "Guest") {
    // If no username is provided, it defaults to "Guest"
    return `${username} just logged in`;
}

console.log(login("jeetesh")); // Output: jeetesh just logged in
console.log(login()); // Output: Guest just logged in


