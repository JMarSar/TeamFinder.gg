import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistroAdminService {

  public url = "https://api-team-finder.herokuapp.com/usuario"
  public mail:string
  public password:string

  constructor(private http:HttpClient) { 
  }

  crearAdmin( mail: string,password:string){
    let user = {
      nickname : "manager",
      email:mail,
      password:password,
      G_manager:true,
      lfm:false,
      fecha_nacimiento:"none",
      info_ad:"none",
      imagen:"none",
      discord:"none",
      twitter:"none",
    }
    console.log(user)
    return this.http.post(this.url, user)
  }
}
