import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent{
  onSignIn(formSignIn){
    console.log(formSignIn);
    // throw new Error('form is invalid');
    // [disabled]="formSignIn.invalid"
  }
}