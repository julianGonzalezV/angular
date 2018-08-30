import { Component } from '@angular/core';
import { PeliculaServiceService } from './services/pelicula-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public _ps: PeliculaServiceService){
    this._ps.getPopulares().subscribe(response=> console.log(response))
  }
}
