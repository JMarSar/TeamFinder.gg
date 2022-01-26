import { Component, OnInit } from '@angular/core';
import { Url, UrlObject } from 'url';
import { ChatService } from '../../shared/chat.service';
import { ListachatsService } from '../../shared/listachats.service';

@Component({
  selector: 'app-lista-chats',
  templateUrl: './lista-chats.component.html',
  styleUrls: ['./lista-chats.component.css']
})
export class ListaChatsComponent implements OnInit {

  public chats: Chat[]
  public chat: boolean
  constructor(public ServicioChats:ChatService, public ServicioLista:ListachatsService) {
    this.chats =[]
    this.chat = false

    let chat = new Chat("Arkhan","Solicitud de conexion")
    let chat2 = new Chat("Full-Metals","Solicitud de conexion")
    let chat3 = new Chat("eArrows","Solicitud de conexion")
    let chat4 = new Chat("HisPanos.20","Solicitud de conexion")
    let chat5 = new Chat("Salt&Soul","Solicitud de conexion")
    let chat6 = new Chat("V4MP5","Solicitud de conexion")
    let chat7 = new Chat("Kotori","Solicitud de conexion")
    this.chats.push(chat,chat2,chat3,chat4,chat5,chat6,chat7)
   }

  ngOnInit(): void {
  }
  // anadir(){
  //   try{
  //     for(let i =0; i<10; i++){
  //       let chat = new Chat("Arkhan","Solicitud de conexion")
  //       this.chats.push(chat)
  //       console.log("flag")
  //       }
  //       return this.chats
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   try{
  //     document.getElementById('foto').style.backgroundImage = ` url("../../../assets/img/iconoPerfil.jpg")`
  //     return document.getElementById('foto')
  //   }
  //   catch(err){
  //     console.log(err)
  //     return err
  //   }

  // }
  abrirChat(){
    this.ServicioChats.activo = true
    this.ServicioLista.activo = false
  }
  cerrar(){
    this.ServicioLista.activo = false
  }



}

class Chat {
  public nombre: string
  public mensaje: string
  constructor( nombre: string, mensaje: string) {
    this.nombre = nombre
    this.mensaje = mensaje
    
  }
}
