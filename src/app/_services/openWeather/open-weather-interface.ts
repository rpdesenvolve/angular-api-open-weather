export abstract class OpenWeatherInterface {
  constructor() {
  }

  abstract getOpenWeather(localizacao: any): any;

  abstract getPesquisaOpenWeather(localizacao: any): any;

}
