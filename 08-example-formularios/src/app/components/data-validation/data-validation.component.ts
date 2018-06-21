import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
    // pasatiempo: ["Netflix","Programming","gym"]
  }

  constructor(  ) { 
   // el consturctor FormControl() recibe el valor por defecto , reglas de validcion y reglas asincronas
      // inicialmente se puede dejar solo con el valor por defecto o nada
    this.formaDesdeData = new FormGroup({  
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', Validators.minLength(4)),
        'apellido': new FormControl('', [Validators.required, this.noHerrera])
      }),
      'correo': new FormControl('',   
                                [ Validators.required, 
                                  Validators.pattern("[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,3}")
                                ]
                              ),
       'pasatiempo': new FormArray([
         new FormControl('gym', Validators.required)
       ]),
       'username': new FormControl('', [Validators.required], this.userExist),
       'password1': new FormControl('', [Validators.required]),
       'password2': new FormControl()
    });

    // this.noIgual.bind( this.formaDesdeData )
    // bind es una funcion Js que lo que dice acá es que al llamar la funcion noIgual y dentro de esta
    // se escriba this  ..ese this va a ser el formaDesdeData, estableciendo un contexto 
    this.formaDesdeData.controls['password2'].setValidators([Validators.required, this.noIgual.bind( this.formaDesdeData )]);
    // this.formaDesdeData.setValue(this.usuario);

    // De esta manera escucha los cambios de todo el formulario, es decir que cada campo que este contenga
    /*this.formaDesdeData.valueChanges
                       .subscribe( data => console.log('data from valueChanges', data) );*/

    // De esta manera solo escucha los cambios de un solo atributo del formulari o
    this.formaDesdeData.controls['username'].valueChanges
                       .subscribe( data => console.log('data from valueChanges', data) );

    this.formaDesdeData.controls['username'].statusChanges
                       .subscribe( data => console.log('data from statusChanges', data) );
  }

  //si el formulario es muy grande entonces podría colocar la logica del formulario acá
  ngOnInit() {
  }

  SaveChanges() {
    console.log('full forma',this.formaDesdeData);
    console.log('VALUE forma',this.formaDesdeData.value);
    //la idea es que se realice con reset() y no con setValue
    //para que se seteen las propiedades por defecto del componente como pristine untouched ..
    /*
    this.formaDesdeData.reset( {
      nombreCompleto:{
        nombre: "",
        apellido: ""
      } ,
      correo: ""
    
    } );*/
  }

  addHobbie() {
    console.log('entra a addH');
    (<FormArray> this.formaDesdeData.controls['pasatiempo']).push(
      new FormControl('Netflix', Validators.required )
    )
  }

  //Lo ideal es que se tenga un archivo de VALIDACIONES PERSONALIZADAS, por ahora vamos a verlo así:

  noHerrera( control: FormControl ): {[s:string]: boolean} {
    if ( control.value === "herrera" ){
      return {
        noherrera: true
      }
    }

    //sí regresa null quiere decir que todo está bien
    return null;
  }



  noIgual( control: FormControl ): {[s: string]: boolean} {
    // como se le hizo bind arriba, ver linea 45 ahora this =  this.formaDesdeData
    let forma = this;
    if ( control.value !== forma.controls['password1'].value ) {
      return {
        passwordnotequal: true
      };
    }

    // sí regresa null quiere decir que todo está bien
    return null;
  }



   // Lo ideal es que se tenga un archivo de VALIDACIONES PERSONALIZADAS ASINCRONAS, por ahora vamos a verlo así:

   userExist( control: FormControl ): Promise<any> | Observable<any> {
    let promesa = new Promise(
      ( resolve, reject ) => {
        setTimeout(() => {
          if ( control.value === 'juliancho' ) {
            resolve({ exists: true} );
          } else {
            resolve(null);
          }
        }, 3000);

      }
    );
    return promesa;
  }

}
