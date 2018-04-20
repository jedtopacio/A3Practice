import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class WeatherService {
  configUrl = 'http://api.wunderground.com/api/95686aabec99db27/conditions/q/Ontario/Toronto.json';
  constructor(private http: HttpClient) { }

  getWeather():any {
    return this.http.get(this.configUrl);
  }
}
