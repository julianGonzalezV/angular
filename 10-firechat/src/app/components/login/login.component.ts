import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public cservive: ChatService) { }

  ngOnInit() {
  }

  ingresar(accountProvider: string) {
    console.log(accountProvider);
    this.cservive.login(accountProvider);
  }

}
