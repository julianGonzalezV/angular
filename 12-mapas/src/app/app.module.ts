import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animaciones de angular material, por lo general cuandeo veamos la palabra xxModule es porque va en los
//imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './custom_modules/material/material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa-editar.component';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjRDSGixF1vzMpbRyf6xRdCHLsA7GCk-k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
