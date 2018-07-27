import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { JsonPipe } from '../../../../node_modules/@angular/common';
import { MatSnackBar } from '../../../../node_modules/@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapaEditarComponent } from '../mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = []; 

  lat = 6.2441988;
  lng = -75.6512524;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { 
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }
  

  ngOnInit() {
  }

  agregarMarcador( event ){    
    this.marcadores.push(new Marcador(event.coords.lat, event.coords.lng));
    this.saveToLocalStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 2000});
  }

  saveToLocalStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(indice:number){
    this.marcadores.splice(indice, 1);
    this.saveToLocalStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 2000});
  }

  openEditDialog(marcador: Marcador): void{
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {title: marcador.title, description: marcador.description}
    });

    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/
  }

}
