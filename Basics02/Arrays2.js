const marvel = ["thor", "ironman", "hulk", "spiderman", "captain america"];
const dc = ["batman", "superman", "flash", "green lantern", "wonder"];

// marvel.push(dc); // Adds the entire dc array as a single element to marvel

// console.log(marvel); // Output: ["thor", "ironman", "hulk", "spiderman", "captain america", Array(5)]

// console.log(marvel.length); // Output: 6 - marvel now has 6 elements, including the dc array as one element

// console.log(marvel[5][0]); // Output: "batman" - Accessing the first element of the dc array within marvel

// console.log(marvel[5][1]); // Output: "superman" - Accessing the second element of the dc array within marvel


// const allheros = marvel.concat(dc); // Concatenates marvel and dc arrays into a new array allheros
// console.log(allheros); // Output: ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman", "flash", "green lantern", "wonder"]4

const newheros = [...marvel, ...dc]; // Using spread operator to combine marvel and dc arrays into newheros
console.log(newheros); // Output: ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman", "flash", "green lantern", "wonder"]
// console.log(newheros.length); // Output: 10 - newheros has 10 elements, combining both arrays

//spread operator can also be used to copy an array
// const copyOfMarvel = [...marvel]; // Creates a shallow copy of the marvel array

//syntax of spread operator
// const newArray = [...array1, ...array2, ...array3]; // Combines multiple arrays into a new array

const array1 = [1, 2, 3,[4, 5],[6, 7,[8, 9]]];

const array2 = array1.flat(Infinity); // Flattens the array to a single level, removing all nested arrays
console.log(array2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] - All nested arrays are flattened into a single array

// console.log(array1.flat(1)); // Flattens the array to one level, removing only the first level of nesting

console.log(Array.isArray("jeetesh")); // Output: false - "jeetesh" is a string, not an array

console.log(Array.from("jeetesh")); // Output: ["j", "e", "e", "t", "e", "s", "h"] - Converts the string into an array of characters

console.log(Array.from({name: "jeetesh", age: 25})); // Output: [undefined, undefined] - Converts an object to an array, but only includes enumerable properties (none in this case)


let score1 = 100
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] - Creates an array with the specified elements
console.log(Array.of("jeetesh", 25, true)); // Output: ["jeetesh", 25, true] - Creates an array with mixed types
console.log(Array.of()); // Output: [] - Creates an empty array
console.log(Array.of(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5] - Creates an array with numbers
