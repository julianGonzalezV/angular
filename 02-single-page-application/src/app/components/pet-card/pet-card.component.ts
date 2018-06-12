import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet:any = {};
  @Input() position:number;

  constructor() { }

  ngOnInit() {
  }

  petDetail() {
    console.log(this.position);
  }


}
