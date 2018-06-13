import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
//para configurar el location del cliente e idioma
import { LOCALE_ID } from '@angular/core';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //ejemplo de como se cambia e idioma
    //{ provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
