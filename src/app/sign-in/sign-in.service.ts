import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class SignInService{
  constructor(private http:HttpClient){}
  postSignIn(value): Observable<any>{
    const url = "https://herokutuan.herokuapp.com/auth";
    return this.http.post(url, value);
  }
}

