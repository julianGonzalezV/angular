import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-validation',
  templateUrl: './data-validation.component.html',
  styleUrls: ['./data-validation.component.css']
})
export class DataValidationComponent implements OnInit {

  formaDesdeData: FormGroup;

  usuario: Object = {
    nombreCompleto:{
      nombre: 'juliano',
      apellido: 'gonzalez'
    } ,
    correo: 'j.andres2087@gmail.com'
  }

  constructor(  ) { 
   // el consturctor FormControl() recibe el valor por defecto , reglas de validcion y reglas asincronas
      // inicialmente se puede dejar solo con el valor por defecto o nada
    this.formaDesdeData = new FormGroup({  
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl(this.usuario.nombreCompleto.nombre, [Validators.required,
          Validators.minLength(4) ]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('',   
                                [ Validators.required, 
                                  Validators.pattern("[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,3}")
                                ]
                              )
    });
  }

  //si el formulario es muy grande entonces podría colocar la logica del formulario acá
  ngOnInit() {
  }

  SaveChanges() {
    console.log('full forma',this.formaDesdeData);
    console.log('VALUE forma',this.formaDesdeData.value);
  }

}
