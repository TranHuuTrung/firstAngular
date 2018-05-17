import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService{
  // temp: number[];
  

  constructor(private http: Http){}

  getTemp(nameCity: string){
    const url ="http://api.openweathermap.org/data/2.5/weather?appid=e873cb3f55d6f7871644ccefc558aee7&units=metric&q="+ nameCity;
    return this.http.get(url)
    .toPromise()
    .then(res => res.json())
    .then(resJson => {
      return resJson;
      // resJson.wind.speed
    })
  }
}