import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class DatosJuegoService {

  public url = "http://localhost:3140/juego";
  public id :number
  constructor(private http:HttpClient, public ServicioRegistro : RegistroService) { 
  }


  guardarJuego(id:number,name:string){
    console.log("llega servicio datos")
    let user ={
      id_base : id,
      name: name,
      servidor: this.ServicioRegistro.user.servidor,
       posicion:  this.ServicioRegistro.user.posicion
    }
    console.log(user)
    return this.http.post(this.url, user)
  }
}
