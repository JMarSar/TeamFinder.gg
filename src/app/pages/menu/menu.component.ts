import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/shared/alertas.service';
import { LfmService } from 'src/app/shared/lfm.service';
import { LoginService } from 'src/app/shared/login.service';
import { MenuLateralService } from 'src/app/shared/menu-lateral.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public ServicioLfm:LfmService, public ServicioLogin:LoginService, public ServicioMenu:MenuLateralService, 
              public ServicioALertas:AlertasService) {

   }

  abrirchats(tipo:boolean){
  }
  abrirAlertas(tipo:boolean){
    this.ServicioALertas.activar(tipo)
  }
  ngOnInit(): void {
  }
  cambiarLfm(){
    this.ServicioLfm.cambiarLfm(this.ServicioLogin.id,0)
  }
  cerrar(tipo:boolean){
    this.ServicioMenu.activar(tipo)
  }

}
