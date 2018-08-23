import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperComponent } from './upper/upper.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PrettyJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
