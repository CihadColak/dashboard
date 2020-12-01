import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {weatherObject} from './weatherObject.model';


@Injectable({providedIn: 'root'})
export class WeatherService {
  baseOWMUrl = 'http://api.openweathermap.org/data/2.5/weather?';

  constructor(private http: HttpClient) {
  }

  getCurrentWeather(city: string) {
    const opts = {
      params: new HttpParams(
        {
          fromObject:
            {
              q: city,
              appid: environment.openWeatherMapApiKey,
              units: 'metric'
            }
        })

    };
    return this.http.get<weatherObject>(this.baseOWMUrl, opts);
  }

}
