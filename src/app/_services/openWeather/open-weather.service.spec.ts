import {TestBed} from '@angular/core/testing';

import {OpenWeatherService} from './open-weather.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        HttpClient
      ]
    });
    service = TestBed.inject(OpenWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
