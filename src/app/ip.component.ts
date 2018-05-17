import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  template: '<h3>{{requestFromIp}}</h3>',
  // providers: [IpService] // vi đa khai bao o app.module.ts nen ko khai bao ơ day
})
export class IpComponent implements OnInit{
  requestFromIp: String;
  constructor(private ipService: IpService){}
  ngOnInit(): void {
    this.ipService.getIp()
    .then(ip => this.requestFromIp = ip)
    .catch(err => console.log(err));
  }
 
}
