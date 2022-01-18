import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CogerIdService {

  public url = "http://localhost:3140/id";

  constructor(private http:HttpClient) { }

  cogerid(nombre:string){
    let info = {
      nombre:nombre
    }

    return this.http.post(this.url,info)

  }
}
