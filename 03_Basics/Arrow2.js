// const addtwo = (a, b) => {
//   return a + b;
// }

// console.log(addtwo(2, 3)); // Output: 5
 
//if we use curly braces in an arrow function, we need to use the return statement to return a value
// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope

//implicit return
// const addtwo = (a, b) => a + b; // Implicit return, no need for curly braces and return statement
//const addtwo = (a, b) => {username: "jeetesh"}; // This will return an object, not the sum of a and b , Output: undefined
// to print this object, we need to wrap it in parentheses
const addtwo = (a, b) => ({username: "jeetesh"}); // This will return an object with username property


console.log(addtwo(3,4)); // Output: 7

const myarray = [1, 2, 3, 4, 5];

// Using arrow function with map to create a new array with each element incremented by 1