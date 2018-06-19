import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

 // comodin para que cualquier otra ruta redireccione al home
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];
