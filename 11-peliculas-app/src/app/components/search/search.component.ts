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
  movieFilter:string = "";

  constructor(private ps: PeliculaServiceService,
    private _activatedR: ActivatedRoute) {}

  ngOnInit() {
    this._activatedR.params.subscribe(params => {
      this.ps.getInTheatres().subscribe( response => {
        this.movies = response.results;
        console.log(' getLatest ', this.movies);
      });
      
    });
  }

  searchMovie() {
    this._activatedR.params.subscribe(params => {
      this.movieFilter = params['movieFilter'];
      this.ps.buscarPelicula(params['movieFilter']).subscribe( response => {
        this.movies = response;
        console.log(' filteredPet choosed '+params['movieFilter'], this.movies);
      });
      
    });
  }
}
