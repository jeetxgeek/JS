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

## Project 4 JS code
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];
let guessCount = 1;

let playing = true;

if (playing) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateInput(userGuess);
    });
}

function validateInput(input) {
    if (isNaN(input) || input < 1 || input > 100) {
        alert('Please enter a valid number between 1 and 100.');
       
    }
    else{
        previousGuesses.push(input);
        if(guessCount === 11){
            displayguess(input)
            displaymessage(`Game Over! You have used all your guesses. Random number was ${randomNumber}`);
            endgame();
        }else{
            displayguess(input)
            checkGuess(input);
        }
    }
    
}

function checkGuess(input) {
    if (input === randomNumber) {
        displaymessage(`Congratulations! You guessed the number ${randomNumber} in ${guessCount} tries.`);
        endgame();
    } else if (input < randomNumber) {
        displaymessage('Your guess is too low!');
        
    } else {
        displaymessage('Your guess is too high!');
        
    }
}


function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayguess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    guessCount++;
    remaining.textContent = `${11 - guessCount}`;
}


function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('newgame');
    p.innerHTML = `<h2 class="newgame">Start a new game! click on reset button</h2>`;
    startOver.appendChild(p);
    playing = false;
    // newgame();
}

// function newgame() {
//     const newGameButton = document.querySelector('.newgame');
//     newGameButton.addEventListener('click', function (e) 
//     {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         previousGuesses = [];
//         guessCount = 1;
//         guessSlot.innerHTML = '';
//         remaining.innerHTML =  `${11 - guessCount}`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         lowOrHi.innerHTML = '';


//         playing = true;
//     });
// }
```

## Project 5 JS code
```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

