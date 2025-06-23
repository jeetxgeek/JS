const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
  event.preventDefault() // Prevent the form from submitting

  const height = parseInt(document.querySelector('#height').value) //'.value' gives the value of the input field and parseInt converts it to an integer
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')


    if(height === '' || height <0 || isNaN(height)){
      results.innerHTML = `please enter a valid height ${height}`
    }else if(weight === '' || weight <0 || isNaN(weight)){
      results.innerHTML = `please enter a valid weight ${weight}`
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2) // BMI formula
      results.innerHTML = `Your BMI is ${bmi}`

      if(bmi < 18.5){
        results.innerHTML += '<br>You are underweight'
      } else if(bmi >= 18.5 && bmi < 24.9){
        results.innerHTML += '<br>You have a normal weight'
      } else if(bmi >= 25 && bmi < 29.9){
        results.innerHTML += '<br>You are overweight'
      } else {
        results.innerHTML += '<br>You are obese'
      }
    }
    
})