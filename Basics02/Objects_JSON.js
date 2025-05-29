const course = {
  title: "JavaScript Basics",
  price: "$99",
  duration: "4 weeks",
  instructor: {
    name: "John Doe",
    experience: "10 years"
  },
}

const {instructor} = course; // Destructuring the course object

console.log(instructor); // Output: { name: "John Doe", experience: "10 years" }

const { name, experience } = instructor; // Destructuring the instructor object
console.log(name); // Output: "John Doe"

const {instructor:teacher} = course; // Renaming the destructured object
console.log(teacher); // Output: { name: "John Doe", experience: "10 years" }

//************************************API */

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans and machines.
// It is often used to transmit data between a server and a web application as an alternative to XML.
// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// JSON is built on two structures:
// 1. A collection of name/value pairs (often referred to as an object in JavaScript).
// 2. An ordered list of values (often referred to as an array in JavaScript).
// JSON is often used in APIs to send and receive data.
// JSON is a string representation of an object, which can be easily converted to and from JavaScript objects using the `JSON.parse()` and `JSON.stringify()` methods.

// {
//     "name": "Jeetesh Kushwaha",
//     "age": 25,
//     "courses": "full stack development"
// }

 