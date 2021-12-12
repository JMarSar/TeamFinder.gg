import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public url = "https://api-team-finder.herokuapp.com/equipo"
  public listaEquipos = []

  constructor( private http: HttpClient) { }

  Equipos(){
    return this.http.get(this.url)
  }
}
