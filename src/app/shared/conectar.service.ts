import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  public url = "https://api-team-finder.herokuapp.com/conectar"
  public estado :string
  
  constructor(public http: HttpClient, public ServicioLogin:LoginService) { 
    this.estado = "espera"
  }

  conectar( id_sender:string,equipo_id:string){
    console.log("recibido")
    let alerta = {
      equipo_id : equipo_id,
      estado: this.estado,
      mensaje:  this.ServicioLogin.nombre_equipo +" quiere conectar con tu equipo",
      sender_id: id_sender
    }
    console.log(alerta)
    return this.http.post(this.url, alerta)
  }
}
