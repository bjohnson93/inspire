export class Weather {

  constructor(data) {
    this.id = data.id
    this.temp = data.main.temp
    this.icon = data.weather[0].icon
    // https://openweathermap.org/img/wn/undefined.png
    // this.date = new Date(data.date) new date controller
  }

  get WeatherTemplate() {
    return `
     <div class="selectable toggle " id="tempToggle" onclick="app.WeatherController.seeCelsius()">
    <p class="fs-3 mb-0">${this.FahrenheitTemp}° F <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt=""></p>
    </div>
    
    `
  }

  get CelsiusWeatherTemplate() {
    return `
    <div class="selectable toggle " id="tempToggle" onclick="app.WeatherController.seeFahrenheit()">
    <p class="fs-3 mb-0">${this.CelsiusTemp}° C <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt=""></p>
    </div>
    
    `
  }

  // @ts-ignore
  get FahrenheitTemp() {
    let kelvinTemp = this.temp
    let f = Math.floor((kelvinTemp - 273.15) * 1.8 + 32)
    return f
  }

  get CelsiusTemp() {
    let kelvinTemp = this.temp
    let c = Math.floor((kelvinTemp - 273.15))
    return c
  }

}

// let weatherData = {

//   "weather": {
//     "0": {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     },
//     "icon": "https://openweathermap.org/img/wn/undefined.png"
//   },
//   "base": "stations",
//   "main": {
//     "temp": 306.18,
//     "feels_like": 304.67,
//     "temp_min": 304.37,
//     "temp_max": 307.56,
//     "pressure": 1018,
//     "humidity": 26
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.68,
//     "deg": 303,
//     "gust": 3.58
//   },
//   "clouds": {
//     "all": 0
//   },
//   "dt": 1688158785,
//   "sys": {
//     "type": 2,
//     "id": 2043419,
//     "country": "US",
//     "sunrise": 1688126794,
//     "sunset": 1688182204
//   },
//   "timezone": -21600,
//   "id": 5586437,
//   "name": "Boise",
//   "cod": 200,
//   "origin": "https://openweathermap.org"
// }