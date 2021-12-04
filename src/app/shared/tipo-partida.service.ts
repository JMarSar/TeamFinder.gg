import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoPartidaService {

  public tipo :boolean
  constructor() {
   }
    cambiarTipo(tipo:boolean){
    this.tipo = tipo
    }
   obetenerTipo(){
    return this.tipo 
    }
}
