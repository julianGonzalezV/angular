import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


/*
* Interesante como el decorator ofrece una opción de providedIn
* Para inyectar automáticamente el servicio, note que si se quita entonces es necesario 
* agragarlo en el providers de app.module.ts  y así poderlo llamar desde cualquier .ts
*/
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCjTrfhSiDN8xh2_60YjKepn8eoEd4ClAJqY2jQY--Ue0bZUMmi_fORwqrXwbZbRf2WzyZ7tj4k_MlhyHcXRyBwo8unVJmQx810sL-OYP2Nm0wxt5d7LSGcodZvbPXrNT5kNGV_bC7lf-Qt1t7rskSP9xwvD58'
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {

    /*
    * La idea de dejarlo solo hasta el llamado del get y no del subscribe es que se haga este segundo desde
    * donde se llame y así controlar cosas como Loading.. y demás validaciones >> ver home.component.ts
    */

    return this.getQuery('browse/new-releases')
    .pipe( map( data => {
      return data['albums'].items;
    } ) );

  }


  getArtists(artistsFilter: string) {
    return this.getQuery(`search?q=${ artistsFilter }&type=artist`)
    .pipe( map( data => data['artists'].items
      ));
  }


  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`)
    .pipe( map( data => data
      ));
  }
}
