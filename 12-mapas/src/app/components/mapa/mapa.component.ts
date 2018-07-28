import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { JsonPipe } from '../../../../node_modules/@angular/common';
import { MatSnackBar } from '../../../../node_modules/@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapaEditarComponent } from '../mapa-editar.component';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

//https://hackernoon.com/custom-directives-in-angular-6-building-a-google-places-autocomplete-4b418ee674ce
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public searchControl: FormControl;

  marcadores: Marcador[] = []; 

  lat = 6.2441988;
  lng = -75.6512524;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {

    this.searchControl = new FormControl();
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult  = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });
    });
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
    
    //Me subscribo a la respuesta del hijo, que en este caso es la ventana modal
  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result', result);
      if(!result){
        //para el caso en que result sea vacío
        return;
      }

       marcador.title = result.title;
       marcador.description = result.description;
       this.saveToLocalStorage();
       this.snackBar.open('Marcador Editado correctamente', 'Cerrar', {duration: 2000});
    });
  }

}
