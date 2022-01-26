import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public enviado:boolean
  constructor(public ServicioChat: ChatService) { 
    this.enviado = false
  }

  ngOnInit(): void {
  }
  cerrar(){
    this.ServicioChat.activo = false
  }
  enviar(){
    this.enviado = true
  }

}
