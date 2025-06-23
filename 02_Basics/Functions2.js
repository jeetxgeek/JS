function calculatecartprice(num1) {
    return num1
}

console.log(calculatecartprice(100, 200, 300)); // This will log 100, as the function only takes one argument

function calculatecartprice2(...num2) {
    return num2 // This will return the array of numbers passed as arguments   

}

console.log(calculatecartprice2(100, 200, 300)); // This will log [100, 200, 300]

//..num2 is called the rest parameter, it allows us to pass an indefinite number of arguments as an array
function calculatecartprice3(val1, val2, ...num3) {
    return num3 
}
console.log(calculatecartprice3(100, 200, 300, 400)); // This will log [300, 400]
// The rest parameter must be the last parameter in the function definition

//passing objects as parameters to a function
const user = {
    name: "John",
    price: 100,
    quantity: 2
}
 function handleobject(anyobj){
    console.log(`name is ${anyobj.name} and price is ${anyobj.price} and quantity is ${anyobj.quantity}`);
}

handleobject(user); // This will log "name is John and price is 100 and quantity is 2"

//passing objects directly to a function
handleobject({
    name: "Jane",
    price: 200,
    quantity: 3
}); // This will log "name is Jane and price is 200 and quantity is 3"


//passing objects as parameters to a function with destructuring
function handleobject2({name, price, quantity}) {
    console.log(`name is ${name} and price is ${price} and quantity is ${quantity}`);
}

handleobject2(user); // This will log "name is John and price is 100 and quantity is 2"
//passing objects directly to a function with destructuring
handleobject2({
    name: "Jane",
    price: 200,
    quantity: 3
}); // This will log "name is Jane and price is 200 and quantity is 3"
//destructuring objects in function parameters allows us to extract values from the object directly
//and use them as variables in the function body, making the code cleaner and more readable
//destructuring objects in function parameters is a powerful feature that allows us to extract values from the object directly
//and use them as variables in the function body, making the code cleaner and more readable


const newarr = [200, 300, 400, 500, 600];

function returnsecondvalue(getarr) {
    return getarr[1]; // This will return the second value of the array passed as argument 
}

console.log(returnsecondvalue(newarr)); // This will log 300, as it is the second value of the array
console.log(returnsecondvalue([100, 200, 300, 400, 500])); // This will log 200, as it is the second value of the array passed as argument
