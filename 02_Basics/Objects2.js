//const tinderuser = new Object()
const tinderuser = {}

tinderuser.username = "john_doe";
tinderuser.id = 12345;
tinderuser.isActive = true;

//console.log(tinderuser);


const regularUser = 
{
    email: "someone@gmail.com",
    fullName: 
    {
        username:
        {
            firstName: "John",
            lastName: "Doe"
        }
        
    }
}

console.log(regularUser.fullName.username);// Accessing nested properties
console.log(regularUser.fullName.username.lastName); // Doe
// console.log(regularUser.fullName?.username.firstName); // Optional chaining to avoid errors if property doesn't exist
// console.log(regularUser.fullName?.username?.middleName); // undefined, no error thrown

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "tres", 4: "cuatro"};


// Merging two objects using Object.assign
// Note: The following line will not work as expected because it creates a new object with obj1 and obj2 as properties.
// Uncommenting the following line will result in an object with obj1 and obj2 as properties, not merged.

// const obj3 = {obj1, obj2};
// console.log(obj3); 

// const obj3 = Object.assign( obj1, obj2); 
// console.log(obj3); // Output: {1: "one", 2: "two", 3: "tres", 4: "cuatro"}
// const obj4 = Object.assign({}, obj1, obj2); // Merging into a new object
// console.log(obj4); // Output: {1: "one", 2: "two", 3: "tres", 4: "cuatro"}

const obj3 = {...obj1, ...obj2}; // Merging using spread operator
console.log(obj3); // Output: {1: "one", 2: "two", 3: "tres", 4: "cuatro"}

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
users[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser)); // Output: ["username", "id", "isActive"] the output will be an array of keys in the object which we can iterate over this will be useful when we want to iterate over the keys of an object because we can use forEach or map to iterate over the keys of an object
console.log(Object.values(tinderuser)); // Output: ["john_doe", 12345, true] the output will be an array of values in the object which we can iterate over this will be useful when we want to iterate over the values of an object because we can use forEach or map to iterate over the values of an object
console.log(Object.entries(tinderuser)); // Output: [["username", "john_doe"], ["id", 12345], ["isActive", true]] the output will be an array of arrays where each array contains a key-value pair from the object which we can iterate over this will be useful when we want to iterate over the key-value pairs of an object because we can use forEach or map to iterate over the key-value pairs of an object

console.log(Object.hasOwn(tinderuser, "username")); // Output: true checks if the object has the property "username" and returns true if it exists, false otherwise
console.log(Object.hasOwn(tinderuser, "email")); // Output: false checks if the object has the property "email" and returns true if it exists, false otherwise