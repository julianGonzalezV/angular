import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {


  pi = Math.PI;

  testPercentage = 0.457;

  salary = 1234.5;

  promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('LLego el dato'), 3500 );

  } );

  pet = {
    name: 'Sultan',
    age: '7',
    adopted: false
  };


  constructor() { }

  ngOnInit() {
  }

}
