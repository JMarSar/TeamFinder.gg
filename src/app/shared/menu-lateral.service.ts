import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  public activo :boolean
  constructor() {
    this.activo = false
    
   }

  activar(activo:boolean){
    
    this.activo = activo
    console.log("recibido"+ activo+ this.activo)
  }
  obetenerActivo(){
    return this.activo 
    }
}
