import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnirseService {

  public url = "https://api-team-finder.herokuapp.com/unirse"
  public estado :string

  constructor(private http:HttpClient) { }

  unirse( id:number,equipo_id:number){
    let alerta = {
      equipo_id : equipo_id,
      estado: this.estado,
      mensaje: "Un jugaodr quiere unirse a tu equipo",
      id_user:id
    }
    console.log(alerta)
    return this.http.post(this.url, alerta)
  }
}
