import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LfmService {

  public url = "https://api-team-finder.herokuapp.com/lfm"
  public id : number
  public lfm :number

  constructor( private http:HttpClient) { }

  cambiarLfm(id:number,lfm:number){
    let data = {
      id :id,
      lfm:lfm
    }
    console.log(data)
    return this.http.put(this.url, data)
  }
}
