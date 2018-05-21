import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';//de goi trong /detail/1/Trung/...
import { ContactModule } from './contacts/contacts.module';
import { ContactDetailModule } from './contact-detail/contact-detail.module'; 

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
const routesConfig : Routes = [
  { path: '', redirectTo:'contacts', pathMatch:'full'},
  { path: '**', component: PageNotfoundComponent}
];
@NgModule({
  imports:[ 
    ContactModule,
    ContactDetailModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  declarations: [
    PageNotfoundComponent
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}