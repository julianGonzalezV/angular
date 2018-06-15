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

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBPQPjKzhZ8HUHArdjd7D_fEszSKQLnCVoFkUYYOP4L0FAfucBULVuBJjR_s0tjM34PUECPo3tQGdO9GWmfU_d9mxQdKpPMOYOjsp7s_3NeeadGV6V65GZHDamosYiIgP3-JMgASstdmt9h6u2T0QGlvCSz86U'
    });

    /*
    * La idea de dejarlo solo hasta el llamado del get y no del subscribe es que se haga este segundo desde
    * donde se llame y así controlar cosas como Loading.. y demás validaciones >> ver home.component.ts
    */
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( data => {
                      return data['albums'].items;
                    } ) );
  }


  getArtist(artistFilter: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBPQPjKzhZ8HUHArdjd7D_fEszSKQLnCVoFkUYYOP4L0FAfucBULVuBJjR_s0tjM34PUECPo3tQGdO9GWmfU_d9mxQdKpPMOYOjsp7s_3NeeadGV6V65GZHDamosYiIgP3-JMgASstdmt9h6u2T0QGlvCSz86U'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ artistFilter }&type=artist`, { headers });
  }
}
