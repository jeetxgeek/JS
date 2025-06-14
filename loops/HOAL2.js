const myobject = {
    js: "JavaScript",
    python: "Python",
    java: "Java",
    csharp: "C#",
}

//for (const key in myobject) {
    //console.log(`Key: ${key}, Value: ${myobjectobject[key]}`);
    //}

    // for (const key in myobjectobject) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key]; // Accessing the value using the key
        
//     }
// }

const arr = ["js", "python", "java", "csharp"];
for (const key in arr) {
    // console.log(`Key: ${key}, Value: ${arr[key]}`);
    }
// keys are the index of the array for example 0, 1, 2, 3 and values at corresponding index are the elements of the array for example "js", "python", "java", "csharp"

const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (const key in map) {
    // console.log(`Key: ${key}, Value: ${map[key]}`); // This will not work as Map is not an object
}
// Instead, we can use map.entries() or map.keys() to iterate over a Map

