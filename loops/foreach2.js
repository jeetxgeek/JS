// const code = ["js","ruby","python","java","c"];

// const values = code.forEach((item)=> {
//     // console.log(item);
//     return item; // This return value will not be captured by forEach
// }
// );
// // values will be undefined because forEach does not return a value
// console.log(values); // This will log undefined
// The forEach method executes a provided function once for each array element
// and does not return a new array or any value, hence `values` is undefined.
// If you want to collect the results, you can use map instead



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const newn = numbers.filter((item) => item >4)
// console.log(newn); // This will log [5, 6, 7, 8, 9, 10]


// // The filter method creates a new array with all elements that pass the test implemented by the provided function.
// // It does not modify the original array and returns a new array containing the elements that satisfy the condition.
// // If you want to log each item that passes the filter, you can chain a forEach after filter



// // newn.forEach((item) => {
// //     console.log(item); // This will log each item in the new array
// // });


// // Alternatively, you can use forEach directly on the original array if you want to log items conditionally
// // numbers.forEach((item) => {
// //     if (item > 4) {
// //         console.log(item); // This will log each item greater than 4
// //     }
// // });




// // The forEach method is useful for executing a function on each element of an array,
// // but it does not return a new array or any value.
// // If you need to transform the array or collect results, consider using map or filter.
// // The filter method is specifically designed to create a new array based on a condition,
// // while forEach is used for side effects like logging or modifying external state.
// // Remember that forEach does not return a value, so if you need to capture results,
// // you should use map or filter instead.


// const nn = numbers.filter((num) => {
//     num>4
// })// This will not work as expected because the arrow function does not have an explicit return statement
// // To fix this, you need to add a return statement
// const nnFixed = numbers.filter((num) => {
//     return num > 4; // This will correctly filter the numbers greater than 4
// });
// console.log(nnFixed); // This will log [5, 6, 7, 8, 9, 10]
// // Alternatively, you can use the concise arrow function syntax
// // const nnConcise = numbers.filter(num => num > 4); // This is a more concise way to write the same filter
// // console.log(nnConcise); // This will also log [5, 6, 7, 8, 9, 10]



// // using foreach for // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; to sort the numbers greater than 4
// const sortedNumbers = [];
// numbers.forEach((num) => {
//     if (num > 4) {
//         sortedNumbers.push(num); // This will add numbers greater than 4 to the sortedNumbers array
//     }
// });
// console.log(sortedNumbers); // This will log [5, 6, 7, 8, 9, 10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter((book) => book.genre === 'History')

userbooks = books.filter((bk) => {return bk.publish >= 2000 && bk.edition >= 2010});
console.log(userbooks); //
