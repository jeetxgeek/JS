const lang = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// lang.forEach(function (item){
//     console.log(item);
//     // This will log each item in the array
// })

//arrow function syntax
lang.forEach((item) => {
    //console.log(item);
    // This will log each item in the array
});
// Using forEach with an index
// lang.forEach((item, index) => {
//     console.log(`${index}: ${item}`);
//     // This will log each item with its index in the array
// });

function printme(item) {
    console.log(item);
}

lang.forEach(printme)

lang.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const mycoding = [
    {
        langname: "JavaScript",
        langext: "JS",
    }
    ,
    {
        langname: "Python",
        langext: "PY",
    },
    {
        langname: "Java",
        langext: "JAVA",
    },
]

mycoding.forEach((item) => {
    console.log(item.langname +": "+ item.langext);
}
);
