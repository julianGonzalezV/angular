import { Component } from '@angular/core';
/*
  selector: Va a permitir que desde el html lo llamemos como etiquetas.
  template: Es par definir el html del componente, en este caso solo es un h1 pero si fuera algo enorme entonces se crea un 
            archivo aparte.
  

*/
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html' 
})
export class BodyComponent{

  show = true;

  variable1:any = {
    attr1: "Mensaje 1",
    attr2: "attr 2 message"
  };

  //ng for trabaja basado en arreglos, vaya al html como va
  myArray: string[] = ["Valor 1","Valor 2","Valor 3","Valor 4"];

}