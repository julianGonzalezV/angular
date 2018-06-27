import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ng-switch',
  templateUrl: './example-ng-switch.component.html',
  styleUrls: ['./example-ng-switch.component.css']
})
export class ExampleNgSwitchComponent implements OnInit {

  alerta: string = 'info';

  constructor() { }

  ngOnInit() {
  }

}
