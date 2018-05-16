import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="addNumber()" class="btn btn-info">Add</button>
    &nbsp;
    <button (click)="subNumber()" class="btn btn-warning">Sub</button>
  `
})
export class ChildComponent{
  @Output() myClick = new EventEmitter<boolean>();
  addNumber(){
    this.myClick.emit(true); //emit de chay myclick
  }
  subNumber(){
    this.myClick.emit(false);
  }
}