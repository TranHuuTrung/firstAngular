import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor() { }
  arrPersons = [
    {name: 'Trung', age: '22'},
    {name: 'Thu', age: '20'},
    {name: 'Hieu', age: '12'},
    {name: 'Quynh Anh', age: '10'},
    {name: 'Minh', age: '2'}
  ]
  ngOnInit() {
  }

}
