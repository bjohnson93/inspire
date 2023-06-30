import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const res = await api.get('api/weather')
    console.log('what is the weather like?', res.data);

    AppState.weather = new Weather(res.data)
    // AppState.weather = res.data
    console.log('ap weather', AppState.weather);
    AppState.emit('weather')
  }

}

export const weatherService = new WeatherService()