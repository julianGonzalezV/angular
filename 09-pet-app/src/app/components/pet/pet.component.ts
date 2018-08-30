import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Pet } from '../../interfaces/pet.interface';
import { PetService } from '../../services/pet.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styles: []
})
export class PetComponent implements OnInit {

  pet: Pet = {
    name: '',
    bestFriend: '',
    history: '',
    age: 0,
    houseType: ''
  };

  isNew: false;
  id: string;

  constructor(private petService: PetService,
              private router: Router,
              private actR: ActivatedRoute) {
                this.actR.params.subscribe(params => {
                this.id = params['id'];
                if(this.id != 'new'){
                  this.petService.getRecord( this.id ).subscribe( petData => {
                    this.pet = petData;
                  });
                }
                });
              }

  ngOnInit() {
  }

  save() {
    if( this.id === 'new' ){
      console.log('guardando', this.pet);
      this.petService.newRecord(this.pet).subscribe( data => {
        this.router.navigate(['/pet', data.name]);
      }, error => {
        console.error(error);
      });
    } else {
      console.log('actualizando', this.pet);
      this.petService.updateRecord(this.pet, this.id).subscribe( data => {
      }, error => {
        console.error(error);
      });
    }
  }

  addNew(  forma: NgForm ) {
    this.router.navigate(['/pet', 'new']);
    forma.reset({
      
    });
  }

}
