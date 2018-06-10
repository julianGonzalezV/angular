import { Component } from '@angular/core';
// Para poder atrapar los parámetros que se envían por url ejemplo http://localhost:4200/pet/4  (para atrapar el 4)
import { ActivatedRoute } from '@angular/router';
import { PetsService, Pet } from '../../services/pets.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {

  pet:any = {};
  constructor(private _petsService: PetsService,
              private activatedR: ActivatedRoute) { 
    this.activatedR.params.subscribe(params => {
      // se coloca id porque así se llama en app.routes.ts --> /:id
      console.log('Pet id choosed '+params['id']);
      this.pet = this._petsService.getPetByIdx(params['id']);
    });
  }

}
