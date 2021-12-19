import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  public url = "http://localhost:3140/registro";
  public user:User


  constructor(private http: HttpClient) { 
    this.user ={
      id_base:1,
      G_manager : 0,
      email : "none",
      nombre : "none",
      password: "none",
      idioma: "esp",
      lfm: 0,
      fecha_nacimiento : "none",
      info_ad : "none",
      imagen : "none",
      nick : "none",
      servidor : "EW1",
      posicion : "none",
      id_jugador_riot : "none",
      puuid : "none",
      id_ecrypt : "none",
      id_juego_fav : 1,
      id_champion : 0,
      asist : 0,
      elo : 0,
      tier : "none",
      wins : 0,
      loses : 0,

    }
  }


  guardar(){
    console.log(this.user)
    return this.http.post(this.url, this.user)
  }
}
