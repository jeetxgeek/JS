const promiseone = new Promise(function(resolve, reject){
    // Do an async task
    setTimeout(function(){
        console.log("async task1 is completed");
        resolve();  // This tells the promise it finished successfully
    }, 1000);
});


promiseone.then(function(){
    console.log("Promise consumed");   
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("asyn 2 resolved");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"jeetesh", email: "jeetesh@xyz.com"})
    },1000)
})


//passing above data in then
promise3.then(function(user){
    console.log(user);
    
})

//error encounter
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"jeetesh", pass:"123445"})
        }
        else{
            reject("ERROR:Something Went wrong!");
        }
        
    },1000)
})

//chaining
promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myuser)=>{
    console.log(myuser);
    
})
.catch(function(err){
    console.log(err);  
})
.finally(()=> console.log("Either promise is resolved or rejected"))

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", pass:"123445"})
        }
        else{
            reject("ERROR:JS Went wrong!");
        }
        
    },1000)
})

// async function consumepromise5(){
//     const response = await promise5
//     console.log(response);
    
// }
//async and await does not handle error directly, it will throw error in the caller function it will always suggest to wrap it in try catch block


async function consumepromise5(){
    try{
        const response = await promise5
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

//then() and catch() are not chainable in async function, we have to use try catch block to handle error
//but we can use try catch block inside then() and catch() to handle error in promise chain
//also writing a call response using then() and catch() or async and await is same thing, it is just a different way of writing it


// consumepromise5()

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data = await response.json()
//         console.log(data);
       
        
        
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }

// getallusers()


//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})//this will return promise on fetch in json format
.then((data)=>{
    console.log(data);
})//this will print data passed from response 
.catch((error)=> console.log(error)
)//this will handle rejection/error



