import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';


const app_routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'pet/:id', component: PetComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pets' }
];

export const app_routing = RouterModule.forRoot(app_routes); 