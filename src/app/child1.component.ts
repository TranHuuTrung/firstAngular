import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
     <h3>{{ value }}</h3>
  `
})

export class Child1Component{
  value = 0;
}