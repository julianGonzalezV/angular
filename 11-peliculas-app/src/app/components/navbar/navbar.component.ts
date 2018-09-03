import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchMovie(textVal:string) {
    console.log('va a buscar la pelicula desde Navbar con filtro ', textVal)
    const filter = textVal;
    this._router.navigate(['search', filter]);    
  }

}
