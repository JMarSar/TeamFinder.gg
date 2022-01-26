import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MenuLateralService } from './shared/menu-lateral.service';
import { AlertasService } from './shared/alertas.service';
import { ListachatsService } from './shared/listachats.service';
import { ChatService } from './shared/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamFinder';
  constructor(public routeLocation :Location , public ServicioMenu:MenuLateralService, 
              public ServicioAlertas: AlertasService, public ServicioListaChats:ListachatsService, public ServicioChats:ChatService){}
}
