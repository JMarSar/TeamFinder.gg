import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingJugadoresService {

  public url = "https://api-team-finder.herokuapp.com/ranking"
  public listaJugadores = []
  public jugador: any

  constructor(private http:HttpClient) { }
  

  Jugadores(){
    return this.http.get(this.url)
  }
}
