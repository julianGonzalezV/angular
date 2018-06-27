import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//Note tan bacano que permite centralizar los routes por tipo, en este ejemplo los routes para gestion de 
//usuarios se encuentran en USUARIO_ROUTES y así evitamos
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'usuario/:id', 
    component: UsuarioComponent,
    children: USUARIO_ROUTES
    
  },
 
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);