import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule }   from '../app-routing.module';

import { MapComponent }   from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmBu6hEqVIMBpn6BzdqONi1MMnN_Jrq_s'
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MapComponent]
})
export class MapModule {
}
