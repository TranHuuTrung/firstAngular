import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/retry';

@Injectable()

export class WeatherService{
  constructor(private http: HttpClient){}
  //co the tao 1 class de lay du lieu , Observable<tenclass đó>
  getTemp(nameCity: string): Observable<any>{
    const url ="http://api.openweathermap.org/data/2.5/weather?appid=e873cb3f55d6f7871644ccefc558aee7&units=metric&q="+ nameCity;
    // return this.http.get(url, { observe: 'response' })
    return this.http.get(url);
  }
}