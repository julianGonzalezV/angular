import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';


// Services
import { PetsService } from './services/pets.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { FilteredPetsComponent } from './components/filtered-pets/filtered-pets.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PetsComponent,
    PetComponent,
    FilteredPetsComponent,
    PetCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
