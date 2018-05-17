import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1.component';
@Component({
  selector: 'app-parent1',
  template: `
     <button (click)="onAddForChild()">Add for child</button>
     <app-child1></app-child1>
  `
  // <button (click)="child.value = child.value +1">Add for child</button>
  // <app-child1 #child></app-child1>
})
export class Parent1Component{
  @ViewChild(Child1Component)
  myChild: Child1Component;

  onAddForChild(){
    this.myChild.value++;
  }
}