import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HayAdminService {

  public url = "https://api-team-finder.herokuapp.com/admin"
  constructor(private http:HttpClient) { }

  comprobarAdmin(){
    console.log("comprobando en servicio")
    return this.http.get(this.url)
  }
}
