import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = "https://api-team-finder.herokuapp.com/login"
  public id : number
  public nombre:string
  public password:string
  public id_user: string
  public imagen: string
  public idioma:string
  public manager: boolean
  public lfm :boolean
  public juego_fav: number
  constructor( private http: HttpClient) { }

  login(user:Login){
    return this.http.post(this.url, user)
  }
}
