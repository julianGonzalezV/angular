
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';


// Route Configuration
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pets', component: PetsComponent },
    { path: 'pet/:id', component: PetComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  
  
  export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES); 
