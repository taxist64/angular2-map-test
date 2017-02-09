import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';

import { AlertModule } from 'ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { ExhibitionsMapComponent } from './exhibitions-map/exhibitions-map.component';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { MapService } from "./map.service";

@NgModule({
  declarations: [
    AppComponent,
    ExhibitionsMapComponent,
    ExhibitionDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDNpiMAyher2vu4rdJWhlYQEzCSgSXK3s'
    }),
    AlertModule.forRoot()
  ],
  providers: [MapService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
