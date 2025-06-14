const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newn = mynums.map((num)=> num +10)
console.log(newn);
// This code creates a new array by adding 10 to each element of the original array mynums
// The map function iterates over each element in the mynums array and applies the function num + 10 to it
// The result is a new array where each element is the corresponding element from mynums increased by 10

//if we use objects {} in arrow function, we need to use return statement
// const newn = mynums.map((num) => { return num + 10 })

//chaining methods
// const new2 = mynums
//   .map((num) => num + 10)
//   .filter((num) => num > 15)
//   .reduce((acc, num) => acc + num, 0);
// console.log(new2);
// // This code chains multiple array methods together
// // 1. It first maps over the mynums array, adding 10 to each element
// // 2. Then it filters the resulting array to keep only elements greater than 15
// // 3. Finally, it reduces the filtered array by summing up all the elements, starting from an initial value of 0
// // The final result is the sum of all elements in the new array that are greater than 15
// // This is a powerful way to transform and process arrays in a concise manner

//chaining methods

const newNumms = mynums
    .map((num) => num*10 )//the result for this wiil be passed to the next method
    .map((num) => num + 1)
    .filter((num => num >= 40)) //the result for this will be passed to the next method
    //.reduce((acc, num) => acc + num, 0); //this will sum up all the elements in the array, starting from an initial value of 0
console.log(newNumms);
