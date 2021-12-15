import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { MenuLateralService } from 'src/app/shared/menu-lateral.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public ServicioLogin: LoginService, public ServicioMenu: MenuLateralService) {
  }

  ngOnInit(): void {
  }

  ver(){
    
  }

}
