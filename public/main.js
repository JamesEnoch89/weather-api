
const searchWeather = () => {
  let weatherSearch = document.querySelector("#searchZip").value;
  console.log(weatherSearch)

const zipUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${weatherSearch}&units=imperial&APPID=9532a3721313153e5e16b590ba5602c2`

fetch(zipUrl).then((response) => {
  if (response.status === 200) {
    return response.json()
  }
}).then((weather) => {
  console.log(weather);
  const output = document.ques

})
}

// if(weatherSearch) === typeof number return ^^above applicationCache

// else

// city api**