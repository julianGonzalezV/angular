import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular material components import 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,    
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  //exports es la coleccion de modulos o elemenetos que deseo que se exporten cuando se exporte este modulo 
  //que en este caso se llama MaterialModule, sino le digo esto entonces solo estarán dismponible a nivel 
  //local
  exports: [  
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
