import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName = '';
  cityName ='';
  temp = null;
  windSpeed = null;
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  // getWeather(){
  //   this.isLoading = true;
  //   this.weatherService.getTemp(this.txtCityName)
  //   .then(data => {
  //     this.cityName = data.name;
  //     this.temp = data.main.temp;
  //     this.windSpeed = data.wind.speed;
  //     this.isLoading = false;
  //     this.txtCityName ='';
  //   })
  //   .catch(err => {
  //     alert('Cannot your city name!');
  //     this.isLoading = false;
  //     this.txtCityName ='';
  //   });
  getWeather(){
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
      .subscribe(data => {
        // console.log(data.name);
        this.cityName = data.name;
        this.temp = data.main.temp;
        this.windSpeed = data.wind.speed;
        this.isLoading = false;
        this.txtCityName ='';
      }, err => {
        // alert('Cannot your city name!');
        this.isLoading = false;
        this.txtCityName ='';
      });
  }
}
