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
      'Authorization': 'Bearer BQC0WWtfkeh3v5J8f8oWxdIjJjFBUa7gjAaRsJ4AB7lse_x0HtR-oWMpf_32-sBZ3aCeLqtgQIzOe-eAgdm0y2KaCJWLHMHwKGcWgS7c42ZBEsYW_uswmOrLjT5DqacMBsMz1lYahB8cT5pCn_ffxb39TdlYG58'
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


  getArtist(artistFilter: string) {
    return this.getQuery(`search?q=${ artistFilter }&type=artist`)
    .pipe( map( data => data['artists'].items
      ));
  }
}
