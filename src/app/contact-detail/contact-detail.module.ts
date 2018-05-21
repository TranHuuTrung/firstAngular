import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactDetailComponent } from './contact-detail.component'

const routesConfig : Routes = [
  { path: 'detail', component: ContactDetailComponent  },
  { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ],
  declarations: [ContactDetailComponent]
})

export class ContactDetailModule {}