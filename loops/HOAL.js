//high order array loops
//for of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

const greeting = "Hello World";
for (const char of greeting) {
    // console.log(`each char is: ${char}`);
}

//maps
const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

// console.log(map);

for (const [key, value] of map) { //destructuring
    // console.log(key, ':-', value);
}


const myobj = {
    'game1': 'Football',
    'game2': 'Cricket',
    'game3': 'Hockey'
};

// for (const [key,value] of myobj) { //destructuring
    // console.log(key, ':-', value); 
// } // this will throw an error because myobj is not iterable
// To iterate over an object, we can use Object.entries() or Object.keys()


for (const [key, value] of Object.entries(myobj)) { //destructuring
    //  console.log(key, ':-', value);
}