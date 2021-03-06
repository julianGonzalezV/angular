import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';


// Route Configuration
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:filteredMovie', component: SearchComponent },
    { path: 'movie/:id/:fromPlace', component: DetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  
  
  export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES); 