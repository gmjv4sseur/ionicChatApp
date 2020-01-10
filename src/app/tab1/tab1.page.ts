import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  weatherInfos: any;
  weatherIcon: any;

  constructor(private weatherService: WeatherService) {

    this.weatherIcon = this.getIcon();

  }

  getWeather(cityname) {

    if (!this.weatherInfos) {
      this.weatherService.getWeather(cityname).subscribe(res => {

        this.weatherInfos = res;
        this.weatherIcon = this.getIcon();
        console.log(this.weatherInfos);

      })
    }
  }

  getIcon() {
    if (this.weatherInfos) {
      return "https://openweathermap.org/img/wn/" + this.weatherInfos['weather'][0]['icon'] + "@2x.png";
    }
    else{
      return "../../assets/icon/favicon.png";
    }
  }
}
