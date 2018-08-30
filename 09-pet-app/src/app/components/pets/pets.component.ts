import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../interfaces/pet.interface';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styles: []
})
export class PetsComponent implements OnInit {

  petList: Pet[];
  loading = true;

  constructor( private petService: PetService ) {
     // timeout para que note como sale el mensaje en la lista de cargando o cuando tengamos que
    // traer set de datos que tarden o que sepamos que la conexión a internet sea muy lenta
    this.petService.getRecordList().subscribe( dataResponse => {
            setTimeout(() => {
              this.loading = false;
              this.petList = dataResponse;
            }, 1000);
    });
  }

  ngOnInit() {
  }

  deleteRecord(key$: string){
    this.petService.deleteRecord(key$)
    .subscribe(response => {
      if(response){
        console.log(response);
      }else{
        delete this.petList[key$];
      }
    });
  }

}
