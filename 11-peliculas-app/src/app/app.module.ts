import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';
//services
import { PeliculaServiceService } from './services/pelicula-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    JsonpModule
  ],
  providers: [
    PeliculaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
