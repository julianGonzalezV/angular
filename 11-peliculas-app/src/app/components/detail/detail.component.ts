import { Component, OnInit,  Input, Output } from '@angular/core';
// Para poder atrapar los parámetros que se envían por url ejemplo http://localhost:4200/pet/4  (para atrapar el 4)
import { ActivatedRoute } from '@angular/router';
import { PeliculaServiceService } from '../../services/pelicula-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: any = {};
  constructor(private _ps: PeliculaServiceService,
      private activatedR: ActivatedRoute) {       
      this.activatedR.params.subscribe(params => {
      // se coloca id porque así se llama en app.routes.ts --> /:id
      this._ps.getPelicula(params['id']).subscribe(response => {
        console.log('Movie id choosed ' + params['id'], response);
        this.movie = response
      });
    
      });
    }

  ngOnInit() {
  }

}
