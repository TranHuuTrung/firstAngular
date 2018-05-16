import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  name = 'Trung';
  evenText = { color: 'red', fontSize: '40px'};
  oddText = { color: 'blue', fontSize: '20px'};
  isHighLight = true;
  // currentClass = { circle: !this.isHighLight, square: this.isHighLight };
  constructor() { }

  ngOnInit() {
  }
  /***
   * Dùng (keyup) de lay gia tri input (keyup)="showEvent($event)"
      showEvent(event){
        this.name = event.target.value;
      }
  */
  toggleHighLight(){
    this.isHighLight = !this.isHighLight;
  }
  
}
