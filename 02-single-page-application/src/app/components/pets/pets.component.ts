import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '../../services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styles: []
})
export class PetsComponent implements OnInit {
  
  pets:Pet[] = [];
 

  constructor( private _petsService: PetsService,
               private _router: Router  ) { }

  ngOnInit() {
    this.pets = this._petsService.getPets();
    console.log(this.pets);
  }

  petDetail( index:number ){
    this._router.navigate(['/pet',index]);
  }

}
