import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet:any = {};
  @Input() position:number;

  @Output() selectedPet:EventEmitter<number>;

  constructor() { 
    this.selectedPet = new EventEmitter();
  }

  ngOnInit() {
  }

  petDetail() {
    console.log("Detail del CARD component");
    this.selectedPet.emit( this.position );
  }


}
