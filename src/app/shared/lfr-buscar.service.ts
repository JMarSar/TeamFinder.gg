import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LfrBuscarService {

  public url = "http://localhost:3140/lfr"
  public equipo: any
  public cancelar:boolean

  constructor(private http:HttpClient) {
   }

  buscar(){
    console.log("recibido servicio")
    return this.http.get(this.url)
  }
  introducir(id:string, lfr:string){
    let data ={
      id: id,
      lfr : lfr
    }
    return this.http.put(this.url,data)
  }
}
