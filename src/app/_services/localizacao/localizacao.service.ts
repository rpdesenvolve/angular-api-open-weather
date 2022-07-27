import {Injectable} from '@angular/core';
import {LocalizacaoInterface} from "./localizacao-interface";

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService extends LocalizacaoInterface{

  constructor() {
    super();
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }
}
