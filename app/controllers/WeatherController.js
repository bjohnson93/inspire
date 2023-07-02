import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather() {
  const weather = AppState.weather

  setHTML('weatherDisplay', weather.WeatherTemplate)



}
export class WeatherController {

  constructor() {
    // console.log('the weather controller is in action!');



    this.getWeather()
    AppState.on('weather', _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }



  seeCelsius() {
    const weather = AppState.weather
    setHTML('weatherDisplay', weather.CelsiusWeatherTemplate)
  }
  seeFahrenheit() {
    const weather = AppState.weather
    setHTML('weatherDisplay', weather.WeatherTemplate)
  }
}