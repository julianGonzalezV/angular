import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplly-ng-class',
  templateUrl: './aplly-ng-class.component.html',
  styleUrls: ['./aplly-ng-class.component.css']
})
export class ApllyNgClassComponent implements OnInit {

  dinamicAlert: string = "alert-danger"

  properties: Object ={
    danger: false
  }

  loading = false

  constructor() { }

  ngOnInit() {
  }

  ejecutarTestLoading(){
    this.loading = true;
    //simulando la espera de un servicio externo
    setTimeout(() => {
      this.loading = false
    }, 5000);
  }

}
