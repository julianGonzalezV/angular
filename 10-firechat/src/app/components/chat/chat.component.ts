import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message = '';
  elem: any;

  constructor(public chatService: ChatService) {
    this.chatService.loadMessage().subscribe(()=>{
      setTimeout(()=> {
        this.elem.scrollTop = this.elem.scrollHeight;
      }, 20);
    });
   }

  ngOnInit() {
    this.elem = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    console.log('enviando mensaje', this.message);
    if (this.message.length > 0 ) {
      this.chatService.addMessage(this.message).then(() => {
          console.log('mensaje almacenado');
          this.message = '';
      }).catch(err =>{
        console.error('Error almacenando mensaje', err);
      });
    }
  }

}
