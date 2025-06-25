# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/vitejs-vite-eqeeoy62?file=index.html&terminal=dev)


# Solution Code

## project 1 js code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 JS code
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please enter a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please enter a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // BMI formula
    result.innerHTML = `Your BMI is ${bmi}`;

    if (bmi < 18.5) {
      result.innerHTML += '<br>You are underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML += '<br>You have a normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML += '<br>You are overweight';
    } else {
      result.innerHTML += '<br>You are obese';
    }
  }
});
```
## Project 3 JS code
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//setInterval() is a method that calls a function or evaluates an expression at specified intervals (in milliseconds). It will continue until clearInterval() is called or the window is closed.









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
```