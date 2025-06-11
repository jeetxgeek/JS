//if

const userlog = true
if (true) {
    console.log('User is logged in');
    
}
//comparison operators
// Comparison operators examples
// console.log(5 > 3);    // true
// console.log(5 < 3);    // false
// console.log(5 >= 5);   // true
// console.log(5 <= 4);   // false
// console.log(5 == '5'); // true (loose equality)
// console.log(5 === '5');// false (strict equality)
// console.log(5 != 4);   // true
// console.log(5 !== '5');// true

const temperature = 30;
if (temperature > 25) {
    console.log('It is warm outside');
}
else {
    console.log('It is cold outside');
} //else part will always execute if the condition is false

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User has the power to ${power}`);
// }

// console.log(`User has the power to ${power}`); // This will throw an error because 'power' is not defined outside the if block
// The variable 'power' is block-scoped, so it cannot be accessed outside the if block

const balance = 1000;
//if (balance > 500)  console.log('You can withdraw money'), console.log('Your balance is sufficient'); // This is a single-line if statement, but it is not recommended to use multiple statements like this without braces
; // Single-line if statement this is implicit scoping, not a good practice


// if (balance < 500) {
//     console.log('Less than 500');
// }
// else if (balance < 1000) {
//     console.log('Less than 1000');
// }
// else if (balance < 900) {
//     console.log('Less than 1000');
// }else {
//     console.log('Greater than 1200');
// } // This is an example of if-else if-else ladder, where multiple conditions are checked in sequence

const userlogin = true;
const debitCard = true;
const loggedinfromBrowser = false
const loggedinfromgoogle = true;


if (userlogin && debitCard && 2==2) {
    console.log('User can buy the course');
} // if 2==2 is changed to 2==3, the condition will be false and the console.log will not execute

if (loggedinfromBrowser || loggedinfromgoodgle) {
    console.log('User Logged in');
} // if either loggedinfromBrowser or loggedinfromgoodgle is true, the console.log will execute
