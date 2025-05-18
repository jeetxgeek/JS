//Stack(Primitive) and heap(refrence)

let name = "jeetesh"
let name2 = name

name2 = "maurya"

console.log(name);
console.log(name2);

//heap
let user = {
    userEmail:"jeet@xyz.com",
    upi:"user@ybl.com"
}

console.log(user.userEmail);


let user2 = user
user2.userEmail = "jeetesh@google.com"

console.log(user.userEmail);
console.log(user2.userEmail);
