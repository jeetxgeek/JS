const useremail = "h@hitesh.ai"

if (useremail) {
    console.log("got user email");
}else {
    console.log("dont have user email");
}

// if string is empty, it will be treated as false same for , 0, -0,bigint 0n,null, undefined, NaN
// if string is not empty, it will be true like "0", " ", "jeetesh", "0n", -1, 1, 2, 3, 4, 5, true, false , function(){}, {}, [], [1,2,3], Symbol("jeetesh"), BigInt(10), BigInt(0n) are all truthy values
// if object is empty, it will be true like {}, [], function(){}, Symbol("jeetesh"), BigInt(10), BigInt(0n)

// const arr = []
// if (arr.length === 0) {
//     console.log("array is empty");
// }

const myobj = {}

if (Object.keys(myobj).length === 0) {
    console.log("object is empty");
}

// nullish coalescing operator(??) is used to provide a default value when the left-hand side is null or undefined
let val1

// val1 = 5??10
// val1 = val1 ?? 10 // if val1 is null or undefined, it will be assigned 10, otherwise it will retain its original value
// val1 = undefined?? 10 // since val1 is undefined, it will be assigned 10

val1 = null ?? 10?? 20 // since val1 is null, it will be assigned 10, and then 10 will be assigned to 20, so the final value of val1 will be 10
console.log(val1); // 

// ternary operator is used to assign a value based on a condition

//condition ? value_if_true : value_if_false

const iceprice = 100
iceprice>= 80 ? console.log("icecream is expensive") : console.log("icecream is cheap");
// if iceprice is greater than or equal to 80, it will print "icecream is expensive", otherwise it will print "icecream is cheap"