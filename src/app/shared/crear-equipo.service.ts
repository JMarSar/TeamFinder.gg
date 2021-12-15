import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class CrearEquipoService {
  public url = "http://localhost:3140/crearEquipo"
  public url_imagen: number;
  public nombre_equipo:string;
  public acronimo_equipo: string;
  public creador_equipo:string;

  constructor( private http:HttpClient) { }

  crearEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo)
  }
}
