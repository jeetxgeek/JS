const apiKey = "0090ed28e5cd9397dcacb3b4601f8996";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function updateBackground(temp) {
  const body = document.body;

  if (temp <= 10) {
    body.style.background = "linear-gradient(135deg, #74ebd5, #acb6e5)"; // Cold
  } else if (temp > 10 && temp <= 25) {
    body.style.background = "linear-gradient(135deg, #fddb92, #d1fdff)"; // Moderate
  } else {
    body.style.background = "linear-gradient(135deg, #f5576c, #f093fb)"; // Hot
  }
}

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod === "404") {
    document.querySelector(".city").innerHTML = "City not found";
    document.querySelector(".temp").innerHTML = "--";
    document.querySelector(".humidity").innerHTML = "--";
    document.querySelector(".wind").innerHTML = "--";
    weatherIcon.src = ""; // Clear weather icon
    return;
  }

  const temperature = Math.round(data.main.temp);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = temperature + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";

  // 🌈 Apply background change based on temp
  updateBackground(temperature);
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
