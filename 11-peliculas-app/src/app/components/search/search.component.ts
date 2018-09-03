import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../../services/pelicula-service.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: any[]; 
  movieFilter:string;

  constructor(private ps: PeliculaServiceService,
    private _activatedR: ActivatedRoute) {
      this._activatedR.params.subscribe(params => {
        console.log(' filteredMovie choosed '+params['filteredMovie']);
        if(params['filteredMovie']){
          this.movieFilter = params['filteredMovie'];
          this.searchMovie(this.movieFilter)
        }else{
          this.ps.getInTheatres().subscribe( response => {
            this.movies = response.results;
          });
        }
      });
    }

  ngOnInit() {
    console.log('on init ')
  }

  searchMovie(textVal:string) {
    console.log('va a buscar la pelicula')
    if(textVal){
      this._activatedR.params.subscribe(params => {
        this.movieFilter = textVal;
        this.ps.buscarPelicula(this.movieFilter ).subscribe( response => {
          this.movies = response.results;
        });
        
      });
    }
    
  }
}
