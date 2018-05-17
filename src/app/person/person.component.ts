import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  @Input() age: Number;
  @Output() removeByName = new EventEmitter<string>();
  ngOnInit() {
  }
  removePerson(){
    this.removeByName.emit(this.name);
  }
}
