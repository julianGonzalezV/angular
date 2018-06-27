import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private actvRoute: ActivatedRoute) {
    this.actvRoute.params.subscribe(pr => console.log('padre',pr))
   }

  ngOnInit() {
  }



}
