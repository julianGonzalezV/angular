import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <h3>Css for one component</h3>
    <app-css-for-one></app-css-for-one>
    <p>
      p no se afecta acá
    </p>
    <p>
      Acá tampoco
    </p>

    <br>
    <br>
  
    <app-aplly-ng-class></app-aplly-ng-class>

    <br>
    <br>
    <br>
    <h3  >
      Etiquetas Personalizadas<small> >>uso de directives "ng g d directives/new-directive">></small>
    </h3>
    <p [appResaltado] = "'orange'">
      Etiqueta personalizada PASE EL MOUSE POR AQUÍ   :)  :p
    </p>

    <br>
    <br>
    <app-example-ng-switch></app-example-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit,
AfterViewChecked, AfterViewInit {
  
  constructor() { }

  ngOnInit() {
    console.log('ejecutando ngOnInit');
  }

  ngAfterContentInit() {
    console.log('ejecutando ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ejecutando ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ejecutando ngAfterViewInit');
  }

  ngAfterContentChecked() {
    console.log('ejecutando ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('ejecutando ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ejecutando ngOnDestroy');
    }

  ngOnChanges() {
    console.log('ejecutando ngOnChanges');
    }

}
