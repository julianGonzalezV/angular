import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message = "";

  constructor(public chatService: ChatService) {
    this.chatService.loadMessage().subscribe((msj:any[]) => console.log )
   }

  ngOnInit() {
  }

  enviarMensaje(){
    console.log('enviando mensaje', this.message)
  }

}
