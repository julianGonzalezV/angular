import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';
//services
import { PeliculaServiceService } from './services/pelicula-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { RowHomeComponent } from './components/row-home/row-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    RowHomeComponent
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
