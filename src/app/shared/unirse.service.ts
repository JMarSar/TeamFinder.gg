import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UnirseService {

  public url = "https://api-team-finder.herokuapp.com/unirse"
  public estado :string

  constructor(private http:HttpClient, public ServicioLogin:LoginService) {
    this.estado ="espera"
   }

  unirse( id:string,equipo_id:string){
    console.log("recibido")
    let alerta = {
      equipo_id : equipo_id,
      estado: this.estado,
      mensaje: this.ServicioLogin.nombre +" quiere unirse a tu equipo",
      id_user: id
    }
    console.log(alerta)
    return this.http.post(this.url, alerta)
  }
}
