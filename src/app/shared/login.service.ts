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
  public nombre_equipo:string
  public equipo_id:number
  public creador: number
  public url_imagen: string
  public victorias:number
  public derrotas:number
  public servidor:string
  public fbr: number
  public frhR: number
 public fnashR: number
 public ftr: number
  constructor( private http: HttpClient) { }

  login(user:Login){
    console.log(user)
    return this.http.post(this.url, user)
  }
}
