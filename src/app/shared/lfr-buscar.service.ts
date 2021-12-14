import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LfrBuscarService {

  public url = "https://api-team-finder.herokuapp.com/lfr"
  public equipo: any
  public cancelar:boolean

  constructor(private http:HttpClient) {
   }

  buscar(){
    console.log("recibido servicio")
    return this.http.get(this.url)
  }
}
