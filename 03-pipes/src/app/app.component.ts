import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Julian";
  name2 = "pepIto albERto perez rengifo"
  arreglo1 = [1,2,3,4,5,6,7,8,9,10];


  pi = Math.PI;

  testPercentage = 0.457;

  salary = 1234.5;

  promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('LLego el dato'), 3500 );

  } );

  pet = {
    name: "Sultan",
    age: "7",
    adopted: 'N'
  };

  dateTest = new Date();

  video = "mOeSfOJrUIk";

  activar: boolean = true;


}
