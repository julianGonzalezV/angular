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
      'Authorization': 'Bearer QArjGLR2iR_nQKDOPmC7aTh4cJTegYw1IuDrZa7HlDmjMUatW_3rI_-bXNNabnTd1J3RmRzI2gYuT5ZyzNXXYmSSUctkXkgWNMkYK4RDCp__pYTu3wy11dgPWHyp5yY0O_JTRgIOh73ZlyWx2a9I9m5W91lhOw'
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


  getTopTrack(id: string) {
    // data['tracks'] quiere decir que dentro de la respuesta que normalmente viene un object extraemos la
    // lista de tracks
    return this.getQuery(`artists/${ id }/top-tracks?country=CO`)
    .pipe( map( data => data['tracks']
      ));
  }
}
