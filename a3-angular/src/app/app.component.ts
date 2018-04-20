import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = Date.now();
  weather;

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weather = this.weatherService.getWeather().subscribe(response => this.weather = response.current_observation);
  }
  
  ngOnInit(){
  	this.getWeather();
  }

  

}
