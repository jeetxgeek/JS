const myarr = [1, 2, 3, 4, 5];
console.log(myarr); // Outputs the array [1, 2, 3, 4, 5]
console.log(myarr.length); // Outputs the length of the array (5)
console.log(myarr[0]); // Outputs the first element of the array (1)

// const heros = ["ironman", "spiderman", "hulk", "thor"];

// const heros2 = new Array("ironman", "spiderman", "hulk", "thor");
// console.log(heros); // Outputs the array of heroes
// console.log(heros2); // Outputs the array of heroes created with the Array constructor

myarr.push(6); // Adds 6 to the end of the array
console.log(myarr); // Outputs the updated array [1, 2, 3, 4, 5, 6]

myarr.push(7, 8); // Adds 7 and 8 to the end of the array
console.log(myarr); // Outputs the updated array [1, 2, 3, 4, 5, 6, 7, 8]

myarr.pop(); // Removes the last element (8) from the array
console.log(myarr); // Outputs the updated array [1, 2, 3, 4, 5, 6, 7]

myarr.unshift(9); // Adds 9 to the beginning of the array
console.log(myarr); // Outputs the updated array [9, 1, 2, 3, 4, 5, 6, 7]

myarr.shift(); // Removes the first element (9) from the array
console.log(myarr); // Outputs the updated array [1, 2, 3, 4, 5, 6, 7]

console.log(myarr.includes(3)); // Checks if the array includes the element 3 (true)
console.log(myarr.indexOf(3)); // Outputs the index of the element 3 (2)

//slice, splice, concat, join, reverse, sort

const  newarr = myarr.join(); // Joins the elements of the array into a string separated by commas
console.log(newarr); // Outputs the string "1,2,3,4,5,6,7"

const newarr2 = myarr.join(" - "); // Joins the elements of the array into a string separated by " - "
console.log(newarr2); // Outputs the string "1 - 2 - 3 - 4 - 5 - 6 - 7"

console.log("A ", myarr);
const newarr3 = myarr.slice(2, 5); // Slices the array from index 2 to index 5 (exclusive)
console.log("B ", myarr); // Outputs the original array [1, 2, 3, 4, 5, 6, 7]
console.log(newarr3); // Outputs the sliced array [3, 4, 5]

//splice modifies the original array
const newarr4 = myarr.splice(2, 3); // Removes 3 elements starting from index 2
console.log("C ", myarr); // Outputs the modified array [1, 2, 6, 7]
console.log(newarr4); // Outputs the removed elements [3, 4, 5]

const newarr5 = myarr.concat([8, 9, 10]); // Concatenates the array with another array [8, 9, 10]
console.log(newarr5); // Outputs the concatenated array [1, 2, 6, 7, 8, 9, 10]
console.log(myarr); // Outputs the original array [1, 2, 6, 7] (unchanged)

myarr.reverse(); // Reverses the order of the elements in the array
console.log(myarr); // Outputs the reversed array [7, 6, 2, 1]

myarr.sort(); // Sorts the array in ascending order (lexicographically)
console.log(myarr); // Outputs the sorted array [1, 2, 6, 7] (since they are numbers, it sorts numerically)
myarr.sort((a, b) => b - a); // Sorts the array in descending order