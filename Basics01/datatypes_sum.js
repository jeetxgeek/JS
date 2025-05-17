//primitive

// 7types : string,  Number, Boolean, null,Symbol, BIGINT, undefined

const ID = Symbol('123')
const ID2 = Symbol('123')

console.log(ID === ID2);

const bignum= 5632165465131651316511165n


// Non primitive(reference type)
//Array, Objects,Functions

const heros = ["shaktiman","naagraj","doga"]

let obj = {
    name:"jeetesh",
    age:21
}

const myfunc = function () {
    console.log("hello world");
}

console.log(ID);
console.log(myfunc);
myfunc

console.log(typeof myfunc);
