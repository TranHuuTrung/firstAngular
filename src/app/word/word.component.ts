import { Component } from '@angular/core';

@Component({
  // template: '<h3>My name is Trung</h3>',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  selector: 'app-word'
})

export class WordComponent{
  en = 'Hello' ;
  vn = 'Xin Chào';
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot= false;

  toggleForgot(){
    this.forgot = !this.forgot;
  }
}