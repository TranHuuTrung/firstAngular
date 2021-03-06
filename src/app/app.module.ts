import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructureComponent } from './structure/structure.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { Parent1Component } from './parent1.component';
import { Child1Component } from './child1.component';
import { IpComponent } from './ip.component';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AppRoutingModule } from './app-routing.module';

import { IpService } from './ip.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructureComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
