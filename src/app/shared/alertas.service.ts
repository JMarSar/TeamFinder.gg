import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  public activo :boolean
  public url = "https://api-team-finder.herokuapp.com/alertas"
  public listaAlertas = []
  constructor( private http:HttpClient) {
    this.activo = false
   }

  activar(activo:boolean){
    
    this.activo = activo
    console.log("alertas "+ activo+ this.activo)
  }
  mostrarAlertas(id:string){
    let data = {
      equipo :id,
    }
    console.log(data)
    return this.http.post(this.url, data)
  }
  borrarAlerta(id:string){
    let data = {
      id : id
    }
    return this.http.put(this.url, data)
  }
}
