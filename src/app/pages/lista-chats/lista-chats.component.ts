import { Component, OnInit } from '@angular/core';
import { Url, UrlObject } from 'url';

@Component({
  selector: 'app-lista-chats',
  templateUrl: './lista-chats.component.html',
  styleUrls: ['./lista-chats.component.css']
})
export class ListaChatsComponent implements OnInit {

  public chats: Chat[]
  public chat: boolean
  constructor() {
    this.chats =[]
    this.chat = false
   }

  ngOnInit(): void {
  }
  anadir(){
    try{
      for(let i =0; i<10; i++){
        let chat = new Chat("Arkhan","Solicitud de conexion entre equipos")
        this.chats.push(chat)
        console.log("flag")
        }
        return this.chats
    }
    catch(err){
      console.log(err)
    }
    try{
      document.getElementById('foto').style.backgroundImage = ` url("../../../assets/img/iconoPerfil.jpg")`
      return document.getElementById('foto')
    }
    catch(err){
      console.log(err)
      return err
    }

  }
  abrirChat(){
    this.chat = true
    document.getElementById("padre").style.display = "none"
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
