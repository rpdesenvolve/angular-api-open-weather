import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from "../_services/openWeather/open-weather.service";
import {LocalizacaoService} from "../_services/localizacao/localizacao.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  localizacao: any = {};
  weather: any = {};
  hoje: number = Date.now();
  pesquisa: string = '';

  constructor(
    private localizacaoService: LocalizacaoService,
    private openWeatherService: OpenWeatherService
  ) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.localizacaoService.getPosition().then(pos => {
      this.localizacao.lon = pos.lng;
      this.localizacao.lat = pos.lat;

      this.openWeatherService.getOpenWeather(this.localizacao)
        .subscribe(weather => {
          this.montarWeather(weather);
        });

    });
  }

  pesquisar() {
    this.openWeatherService.getPesquisaOpenWeather(this.pesquisa)
      .subscribe(weather => {
        this.montarWeather(weather);
      });
  }

  montarWeather(resultado: any) {
    this.weather.city = resultado.name;
    this.weather.description = resultado.weather[0].description;
    this.weather.icon = resultado.weather[0].icon;
    this.weather.temp = resultado.main.temp.toString().split('.')[0];
    this.weather.tempmax = resultado.main.temp_max.toString().split('.')[0];
    this.weather.tempmin = resultado.main.temp_min.toString().split('.')[0];
    this.weather.sensacao = resultado.main.feels_like.toString().split('.')[0];
    this.weather.vento = Math.round(resultado.wind.speed)*3.6;
    this.weather.umidade = resultado.main.humidity;
    this.weather.visibilidade = resultado.visibility / 1000;
    this.weather.pressao = resultado.main.pressure;
  }
}
