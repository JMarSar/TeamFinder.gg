import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  public url = "https://api-team-finder.herokuapp.com/equipo"
  public listaEquipos = []
  public seleccionado :any

  constructor( private http:HttpClient) { }

  Equipos(){
    return this.http.get(this.url)
  }

  equipoMarcado(index:number){
    console.log(this.listaEquipos[index])

    this.seleccionado= this.listaEquipos[index];
    console.log(this.seleccionado)
  }
}
