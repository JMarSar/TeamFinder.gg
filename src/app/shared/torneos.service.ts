import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Torneos } from '../models/torneos';


@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  public url = "https://api-team-finder.herokuapp.com/torneo"
 
public torneos : Torneos[]

  constructor( public http: HttpClient) {
    this.torneos = []
   }
  

  anadirTorneo(torneo:Torneos){
    console.log(torneo)
    return this.http.post(this.url, torneo)
  }

  obtenerTorneos(){ 
    return this.http.get(this.url)
  }
  
}

