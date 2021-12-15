import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarEquipoService {

  public url = "https://api-team-finder.herokuapp.com/equipos"
  public nombre_equipo :string

  constructor(private http:HttpClient) { }

  buscar(nombre:string){
    console.log(nombre + "servicio")
    let nick={
      nombre_equipo : nombre
    }
    return this.http.post(this.url, nick)
  }
}
