import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  user: Object = {  nombre: null, 
                    apellido: null, 
                    correo: null,
                    pais: "",
                    genero: "Male",
                    acepta: false
                  }

  paises = [{cd: 'COL', nombre:'COLOMBIA'}, 
            {cd: 'CHI', nombre:'CHILE'}]

  generos: string[] = ['Male','Female']
  constructor() { }

  ngOnInit() {
  }

  guardarForm( forma: NgForm ){
    console.log("TemplateComponent: ","Saving Form");
    console.log( "Foram completa ",forma );
    //La forma siempre se ve afectada
    console.log( "Object val ",forma.value );
    //Note como no se modifica el objeto cuando se hace referencia desde el formulario de la manera [ngModel]
    //Pero tambien NOTE como user si se ve afectado cuando se hace referencia desde el formulario de la manera [(ngModel)]
    console.log( "Usuario ",this.user );
  }

}
