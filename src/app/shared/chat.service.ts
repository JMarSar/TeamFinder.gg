import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public activo: boolean
  constructor() {
    this.activo = false
   }

  activar(activo:boolean){
    
    this.activo = activo
    console.log("alertas "+ activo+ this.activo)
  }
}
