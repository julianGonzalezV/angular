import { Component } from '@angular/core';
/*
  selector: Va a permitir que desde el html lo llamemos como etiquetas.
  template: Es par definir el html del componente, en este caso solo es un h1 pero si fuera algo enorme entonces se crea un 
            archivo aparte.
  

*/
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html' 
})
export class FooterComponent{

  anio:number;

  constructor(){
    this.anio = new Date().getUTCFullYear();
  }
}