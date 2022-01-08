import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class TorneosApuntadoService {

  public url = "https://api-team-finder.herokuapp.com/apuntados"
  public listatorneos = []

  constructor(private http:HttpClient, private ServicioLogin:LoginService) {
   }


  torneosApuntado(){
    return this.http.get(this.url)
  }
}
