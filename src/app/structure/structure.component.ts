import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor() { }

  isShow = true;
  arrSubject = ['Angular', 'PHP', 'React'];
  ngOnInit() {
  }

  toggleIf() {
    this.isShow = !this.isShow;
  }
}
