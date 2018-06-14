import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAr8DvoP0jufHfHM51BMuSyr648lbPkwsbbMK6KfOqwRQr08ft2_ivHXeEgScPwk5SyYNoD_MzNtXcjOVs'
    });

    /*
    * La idea de dejarlo solo hasta el llamado del get y no del subscribe es que se haga este segundo desde
    * donde se llame y así controlar cosas como Loading.. y demás validaciones >> ver home.component.ts 
    */
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
            
  }
}
