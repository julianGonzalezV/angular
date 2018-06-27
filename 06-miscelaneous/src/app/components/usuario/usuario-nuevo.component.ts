import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private actvRoute: ActivatedRoute) { 
    this.actvRoute.parent.params.subscribe(pr => console.log('hija', pr))
  }

  ngOnInit() {
  }

}
