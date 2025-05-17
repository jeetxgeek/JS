//let score = 33
let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueofscore = Number(score)  //explicit coversion
console.log(valueofscore); //gives NaN not a number as output
console.log(typeof valueofscore);

//33=> Number
//"33"=> string
//"33abs"=> NaN
//true and false => 1&&0
//"" => false
// "j" => true 

//let bool = 1 

//let bool = "" //gives false

let bool = "jeetesh" // gives true 
let bool_ = Boolean(bool)
console.log(bool_);

let num = 32
let nume = String(num)
console.log(nume);
console.log(typeof nume);