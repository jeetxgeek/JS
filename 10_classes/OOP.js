const user = {
    name: "John",
    logincount: 8,
    signedin : true,

    userdetails: function() {
        console.log(`User name is ${this.name} and login count is ${this.logincount}`);
        console.log(this);
        
    }   
}



// console.log(user.userdetails());

// console.log(this);


function User(name, logincount, signedin) {
    this.username = name ;
    this.count = logincount
    this.sign = signedin
    
    this.greetUser = function() {
        console.log(`Hello ${this.username}, your login count is ${this.count} and signed in status is ${this.sign}`);
    }


    return this
} // this is a constructor function it creates a user object when called with new keyword 

// const user1 = User("Jeetesh", 7, true); 
// const user2 = User("Rohit", 5, false);  // this will ooverwrite the user1 object because we are not using the new keyword

const user1 = new User("Jeetesh", 7, true); 
const user2 = new User("Rohit", 5, false);

//the new keyword creates a copy of the User object and assigns it to the variable user1 or user2
// if we don't use the new keyword, it will return undefined and not create a new object
console.log(user1);
console.log(user2); // user1 and user2 are instances of User object created using the constructor function

