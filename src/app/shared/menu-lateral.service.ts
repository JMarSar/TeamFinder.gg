import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  public activo :boolean
  constructor() {
    
   }

  activar(activo:boolean){
    
    this.activo = activo
    console.log("recibido"+ activo+ this.activo)
  }
  obetenerActivo(){
    return this.activo 
    }
}
