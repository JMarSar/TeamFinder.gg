import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  public url = "http://localhost:3140/conectar"
  public estado :string
  
  constructor(public http: HttpClient) { 
    this.estado = "espera"
  }

  conectar( id_sender:string,equipo_id:string){
    console.log("recibido")
    let alerta = {
      equipo_id : equipo_id,
      estado: this.estado,
      mensaje: "Un equipo quiere conectar con tu equipo",
      sender_id: id_sender
    }
    console.log(alerta)
    return this.http.post(this.url, alerta)
  }
}
