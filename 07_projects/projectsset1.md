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