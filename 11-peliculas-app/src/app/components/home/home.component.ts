import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../../services/pelicula-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popular: any[];

  constructor(private ps: PeliculaServiceService) {
    this.ps.getPopulares().subscribe(response => {
      this.popular =  response.results.slice(0, 6);
      console.log('result'  , this.popular);
    });
  }

  ngOnInit() {
  }

}
