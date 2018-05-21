import { Component } from '@angular/core';
import {SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  providers: [SignInService]
})
export class SignInComponent{
  data = {'email': 'trung111111@gmail.com', 'password': '111111111'};
  constructor(private signInService: SignInService) { }
  sendPost(){
    this.signInService.postSignIn(this.data)
    .subscribe(res => console.log(res));
  }
  onSignIn(formSignIn){
    console.log(formSignIn);
    // throw new Error('form is invalid');
    // [disabled]="formSignIn.invalid"
  }
}