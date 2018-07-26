import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animaciones de angular material, por lo general cuandeo veamos la palabra xxModule es porque va en los
//imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';



//Angular material components import 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
