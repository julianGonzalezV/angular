import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { map } from "rxjs/operators";
/*
import "rxjs/Rx";
import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

*/
@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {
  private apiKey: string = "9357df4ee31aeb708c0532a2b98d4cb8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp, private http:Http) { }
  getPopulares(){
    // Así saldría error de cross domain, descomente paa que pruebe
    // let url = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key= ${this.apiKey}&language=es;`
    // return this.http.get( url ).pipe(map( res=> res.json()));
    
    // Solucion a cross domain
    //note el callback al final de la url 
    let url = `${ this.urlMovieDb }/discover/movie?primary_release_date.gte=2018-08-01&primary_release_date.lte=2018-08-11&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map( res=> res.json()));

  }

  buscarPelicula(text:string){
    let url = `${ this.urlMovieDb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map( res=> res.json()));
  }
}
