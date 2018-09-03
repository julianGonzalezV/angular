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
import { APP_ROUTING } from './app.routes';
import { SearhMovieComponent } from './components/searh-movie/searh-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieImagePipe } from './pipes/movie-image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    RowHomeComponent,
    SearhMovieComponent,
    MovieCardComponent,
    MovieImagePipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
