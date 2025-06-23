//for

// for (let i = 0; i <= 10; i++) {
    
//     console.log(`outerloop ${i}`); // This will print numbers from 0 to 9
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop: ${j} and inner loop: ${i}`);
//         console.log(i + "*"+ j + " = " + i * j); // This will print the multiplication table for each number from 0 to 9
//     } 
// }


let myarr = ["flash", "batman", "superman", "green lantern", "aquaman"];
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(`Superhero ${index}: ${element} at index ${index}`); // This will print each superhero and its index
}


for (let index = 0; index <= 20 ; index++) {
    if (index == 11) {
        console.log(`detected 11`);
        // break; // This will exit the loop when index is 11
        continue; // This will skip the current iteration when index is 11
    }
    console.log(`value of i is ${index}`); 
}
console.log("out of the loop now");


//while loop

