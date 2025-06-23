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
