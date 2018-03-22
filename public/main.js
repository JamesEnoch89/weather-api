
const searchWeather = () => {
  let weatherSearch = document.querySelector("#searchZip").value;
  console.log(weatherSearch);

  let weatherAPI = ""

  if (isNaN(weatherSearch)) {
    weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&units=imperial&APPID=9532a3721313153e5e16b590ba5602c2`
  } else {
    weatherAPI = `http://api.openweathermap.org/data/2.5/weather?zip=${weatherSearch}&units=imperial&APPID=9532a3721313153e5e16b590ba5602c2`;
  }

  fetch(weatherAPI).then((response) => {
    if (response.status === 200) {
      return response.json()
  }
}).then((weather) => {
  console.log(weather);
  let temp = document.querySelector("#currentTemp")
  let location = document.querySelector("#location")
  let humidity = document.querySelector("#humidity")
  let wind = document.querySelector("#wind")

  temp.textContent = `The current temperature in ${weather.name} is: ${weather.main.temp}℉`;
  location.textContent = `The conditions has ${weather.weather[0].description}`;
  wind.textContent = `The wind speed is ${weather.wind.speed}`
  humidity.textContent = `The humidity is: ${weather.main.humidity}%`;

})
}
