import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Torneos } from '../models/torneos';


@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  public url = "https://api-team-finder.herokuapp.com/torneo"
 

  constructor( public http: HttpClient) { }

  anadirTorneo(torneo:Torneos){
    console.log(torneo)
    return this.http.post(this.url, torneo)
  }
}
