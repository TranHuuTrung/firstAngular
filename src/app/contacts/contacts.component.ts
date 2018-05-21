import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [
    {id : 1, name: 'Trung', phoneNumber: '0966581498'},
    {id : 2, name: 'Thu', phoneNumber: '01498'},
    {id : 3, name: 'Hieu', phoneNumber: '096'},
    {id : 4, name: 'Thao', phoneNumber: '0898'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
