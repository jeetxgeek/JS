const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);















// const clock = document.getElementById("clock")



// setInterval(function(){
//     // const date = new Date();
//     // const hours = String(date.getHours()).padStart(2, '0');// this will add a leading zero to the hours if it is less than 10
//     // const minutes = String(date.getMinutes()).padStart(2, '0');// this will add a leading zero to the minutes if it is less than 10
//     // const seconds = String(date.getSeconds()).padStart(2, '0');  // this will add a leading zero to the seconds if it is less than 10
    
//     // clock.innerHTML = `${hours}:${minutes}:${seconds}`;
//     // the above code can be simplified using toLocaleTimeString
//     // const date = new Date();
//     // clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: false });
//     // clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: true });   this will show the time in 12-hour format with AM/PM
//     let date = new Date()
//     // console.log(date.toLocaleTimeString)
//     clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: false });// this will show the time in 24-hour format
//     // clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: true });// this will show the time in 12-hour format with AM/PM
// }, 1000)