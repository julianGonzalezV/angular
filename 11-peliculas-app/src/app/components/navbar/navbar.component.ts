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

  searchMovie(textVal: string) {
    if(textVal.length == 0){
      return;
    }
    this._router.navigate(['search', textVal]);    
  }

}
