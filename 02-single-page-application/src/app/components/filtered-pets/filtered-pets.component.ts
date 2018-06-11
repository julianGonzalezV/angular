import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtered-pets',
  templateUrl: './filtered-pets.component.html',
  styleUrls: ['./filtered-pets.component.css']
})
export class FilteredPetsComponent implements OnInit {

  pets:Pet[] = []; 
  petFilter:String = "Sin filtro";

  constructor(private _petsService: PetsService, private _activatedR: ActivatedRoute) { }

  ngOnInit() {
    console.log("holaaaa");   
    this._activatedR.params.subscribe(params => {
      this.petFilter = params['filteredPet'];
      this.pets = this._petsService.searchPet(params['filteredPet']);
      console.log(' filteredPet choosed '+params['filteredPet'], this.pets);
    });
  
  }

}
