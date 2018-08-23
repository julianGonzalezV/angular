import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { app_routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
