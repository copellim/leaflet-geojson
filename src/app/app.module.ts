import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './geoJsonMap/geoJsonMap.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MapComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
