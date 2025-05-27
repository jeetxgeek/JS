// This file will demonstrate the singleton pattern in JavaScript objects.
// A singleton ensures that only one instance of an object exists throughout the application.
// It is useful for managing shared resources, like database connections or configuration settings.
// The singleton pattern restricts the instantiation of a class to one "single" instance.
// Instances of the class can be accessed globally, providing a controlled access point to the resource.


//Object literals are a way to define objects in JavaScript.

const mysym = Symbol("key1"); 


const myobject = {
    name: "jeetesh",
    [mysym]: "value1", // Using a symbol as a key
    "ful_name": "Jeetesh Kushwaha",
    age: 25,
    email:"kushwahajeetesh@gmail.com",
    hobbies: ["reading", "coding", "gaming"],
    //address: {
    //     city: "Noida",
    //     state: "Uttar Pradesh",
    //     country: "India"
    // },
    isStudent: true,
    location:"noida",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Accessing properties of the object
// console.log(myobject.name); // Output: "jeetesh"
// console.log(myobject[ 'age' ]); // Output: 25
// // Calling a method of the object

console.log(myobject["ful_name"]) // Output: "Jeetesh Kushwaha"

// Accessing the symbol property
 console.log(myobject[mysym]); // Output: "value1"

myobject.greet(); // Output: "Hello, my name is jeetesh and I am 25 years old."


myobject.email = "mauryajeetesh@34.com"; // Updating the email property
console.log(myobject.email); // Output: "

//Object.freeze(myobject); // Freezing the object to prevent further modifications
// myobject.age = 30; // This will not work because the object is frozen

myobject.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.location}.`);
}

console.log(myobject.greeting); // Output: "Hello, my name is jeetesh and I am 25 years old. I live in noida."


