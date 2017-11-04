import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }   from './app.component';
import { MapModule }      from './map/map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapModule,
    AppRoutingModule //LAST LINE IN IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }