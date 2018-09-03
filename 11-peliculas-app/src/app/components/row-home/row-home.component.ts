import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-home',
  templateUrl: './row-home.component.html',
  styleUrls: ['./row-home.component.css']
})
export class RowHomeComponent implements OnInit {

  @Input() inputMovieList: any[];
  @Input() inputTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
