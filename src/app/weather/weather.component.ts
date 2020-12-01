import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  // @ts-ignore
  weatherInCelsius : number;
  primaryImgSrc = '';
  secondaryImgSrc = '';
  iconDescription = '';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('berlin,germany')

      .subscribe(data => {
        this.weatherInCelsius = Math.round(data.main.temp);
        this.primaryImgSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
        this.iconDescription = data.weather[0].description
        if(data.weather.length > 1) {
          this.secondaryImgSrc  = 'http://openweathermap.org/img/wn/' + data.weather[1].icon + '@4x.png';
        }
        //this.weatherInCelsius = data.main.temp;
        //console.log(data.main.temp)
      })
  }


  onButtonPress() {
    console.log(this.weatherInCelsius);
  }
}
