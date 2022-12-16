function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8f38c6e1335be5316719a809c492c27b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Petah Tikva&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
