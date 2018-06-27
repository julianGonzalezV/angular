import { Component, OnInit } from '@angular/core';

//al hacer el style para los parrafos se va a notar que solo lo aplica para este 
//y no para todos los parrafos, pues angula rle asigana otra eqtiqueta diferente a lo que pertenece a este
//compo ..note que al dar inspeccionar elemento existe un tag _ngcontent-c1=""  y los demás(fuera del componente) tienen otro
//diferentes
@Component({
  selector: 'app-css-for-one',
  template: `
    <p>
      css-for-one works!
    </p>
    <p>
      css-for-one works2!
    </p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 20 px;
    }
    `]
})
export class CssForOneComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

}
