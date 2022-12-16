function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "8f38c6e1335be5316719a809c492c27b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Petah Tikva&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
