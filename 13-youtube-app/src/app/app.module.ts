import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services
import { YoutubeService } from './services/youtube.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { DoomSeguroPipe } from './pipes/doom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DoomSeguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
