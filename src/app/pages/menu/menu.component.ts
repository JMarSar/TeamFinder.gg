import { Component, OnInit } from '@angular/core';
import { LfmService } from 'src/app/shared/lfm.service';
import { LoginService } from 'src/app/shared/login.service';
import { MenuLateralService } from 'src/app/shared/menu-lateral.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public chats:boolean
  public alertas : boolean
  constructor(public ServicioLfm:LfmService, public ServicioLogin:LoginService) {
    this.chats = false
    this.alertas = false
   }

  abrirchats(){
    this.chats = true 
    document.getElementById("navMenu").style.display = "none"
  }
  abrirAlertas(){
    this.alertas = true 
    document.getElementById("navMenu").style.display = "none"
  }
  ngOnInit(): void {
  }
  cambiarLfm(){
    this.ServicioLfm.cambiarLfm(this.ServicioLogin.id,0)
  }

}
