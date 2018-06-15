import { Component, OnInit } from '@angular/core';

// Import requerido para realizar peticiones http (get, post, ...)
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  // Se inyecta en el constructor
  /*constructor( private http: HttpClient ) {
    console.log(' Inside the HomeComponent constructor');
    //Hasta el get(string) se está preparando el consumo pero para ver los resultados y deja listo
    //para que alguién se subscriba y obtenha los datos
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
              .subscribe( (response: any) => {
                console.log('Paises', response)
                this.paises = response;
              });*/


  nuevasCanciones: any[] = [];
  constructor( private spotif: SpotifyService ) {
    this.spotif.getNewReleases()
    .subscribe( (response: any) => {
      this.nuevasCanciones = response;
    } );
  }

  ngOnInit() {
  }

}
