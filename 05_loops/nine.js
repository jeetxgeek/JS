//.reduce method
// const numbers = [1, 2, 3, 4, 5];
// const initialValue = 0;
// const sumwithInitial = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumwithInitial); // Output: 15

// The reduce method takes a callback function and an initial value
// The callback function takes two parameters: the accumulator and the current value
// The accumulator is the accumulated value from the previous iterations
// The current value is the current element being processed in the array
// The reduce method iterates over each element in the array and applies the callback function
// The final result is the accumulated value after processing all elements in the array
// In this example, the reduce method is used to calculate the sum of all elements in the numbers array
// The initial value is set to 0, so the sum starts from 0
// The callback function adds the current value to the accumulator, resulting in the final sum of 15
// The reduce method is a powerful way to process arrays and perform operations like summation, averaging, or even more complex transformations


const mynum = [1, 2, 3]

const total = mynum.reduce(function(acc,currval){
    console.log(`acc: ${acc}, currval: ${currval}`);
    
    return acc + currval;
}, 0 /*Initial value for the accumulator*/ )

const mytotal = mynum.reduce((acc, currval) => acc + currval, 0);

console.log("total using funtion: "+total); // Output: 6
console.log("total using arrow: " +mytotal); // Output: 6
//this method can be useful for daily tasks like calculating totals, averages, or even transforming data structures.
//for example adding up expenses, cart values, or even counting occurrences of items in a list.


// The reduce method can also be used to transform arrays into objects or other data structures
// For example, you can use it to count occurrences of items in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // Output: { apple: 2, banana: 2, orange: 1 } 




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log("Total price to pay: " + pricetopay); // Output: Total price to pay: 24996
