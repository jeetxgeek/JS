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
