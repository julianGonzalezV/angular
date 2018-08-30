import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {
  private apiKey: string = '9357df4ee31aeb708c0532a2b98d4cb8';
  private urlMovieDb: string = 'https://www.themoviedb.org/3';

  constructor(private jsonp:Jsonp, private http:Http) { }

  getPopulares(){
    // Así saldría error de cross domain, descomente paa que pruebe
    // let url = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key= ${this.apiKey}&language=es;`
    // return this.http.get( url ).pipe(map( res=> res.json()));
    
    // Solucion a cross domain
    //note el callback al final de la url 
    let url = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key= ${this.apiKey}&language=es&callback=JSONPCALLBACK;`

    return this.jsonp.get( url ).pipe(map( res=> res.json()));

  }
}
