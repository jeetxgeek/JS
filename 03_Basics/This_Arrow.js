//this function is used to demonstrate the use of 'this' in JavaScript
// 'this' refers to the current context in which the function is executed
// In the global context, 'this' refers to the global object (window in browsers, global in Node.js)

const user = {
    username: "JohnDoe",
    price:999,

    welcommssg: function() {
        console.log(`${this.username}, welcome to website!`); // 'this' refers to the user object, so it accesses the username property
       // console.log(this); // 'this' refers to the user object, so it accesses the user object itself
        
    }
}


//user.welcommssg(); // Output: JohnDoe, welcome to website!
// In the above example, 'this' refers to the user object because the function is called as a method of the user object

// If we call the function in the global context, 'this' will refer to the global object
//function globalFunction() {
    //console.log(this); // In the global context, 'this' refers to the global object
//}
//globalFunction(); // Output: Window object in browsers, global object in Node.js

//user.username = "JaneDoe"; // Changing the username property
//user.welcommssg(); // Output: JaneDoe, welcome to website!
// In this case, 'this' still refers to the user object, so it accesses the updated username property

//console.log(this); // current context in which the code is executed is empty in this case, so it refers to the global object

//   function chai(){
//      let uname = "jeetesh" 
//      console.log(this.username); // In the global context, 'this' refers to the global object
//   }
//  chai(); // Output: Window object in browsers, global object in Node.js

// const chai = function() {
//     let username = "jeetesh";
//     console.log(this.username); // In the global context, 'this' refers to the global object
// }
// chai(); // Output: undefined in strict mode, global object in non-strict mode
// // In strict mode, 'this' will be undefined in the global context
// // In non-strict mode, 'this' will refer to the global object (window in browsers, global in Node.js)

const chai = () => {
    let username = "jeetesh";
    console.log(this.username); 
}