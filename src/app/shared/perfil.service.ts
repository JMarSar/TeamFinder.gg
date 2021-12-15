import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {


  // NO FUNCIONA
  public url = "https://api-team-finder.herokuapp.com/equipo";
  public nickname:string;

  constructor( private http:HttpClient) { }

  Perfil(){
    console.log(this.http.get(this.url))
    return this.http.get(this.url)
  }
  
}
