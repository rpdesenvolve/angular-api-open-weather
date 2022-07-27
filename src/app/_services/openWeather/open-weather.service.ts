import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {OpenWeatherInterface} from "./open-weather-interface";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService extends OpenWeatherInterface{
  units: string = 'metric';
  lang: string = 'pt_br';
  appid: string = '28be7c1f529189b7bd8e94de9da79d3e';
  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getOpenWeather(localizacao: any) {

    const params = new HttpParams()
      .set('lon', localizacao.lon)
      .set('lat', localizacao.lat)
      .set('units', this.units)
      .set('lang', this.lang)
      .set('appid', this.appid);

    return this.httpClient.get<any>(`${this.baseUrl}`, {params});
  }

  getPesquisaOpenWeather(pesquisa: any) {

    const params = new HttpParams()
      .set('q', pesquisa)
      .set('units', this.units)
      .set('lang', this.lang)
      .set('appid', this.appid);

    return this.httpClient.get<any>(`${this.baseUrl}`, {params});
  }
}
