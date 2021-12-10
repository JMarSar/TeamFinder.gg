import { Component, OnInit } from '@angular/core';
import { MenuLateralService } from 'src/app/shared/menu-lateral.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {
  }
  refresh(): void {
    window.location.reload();
  }
  abrirMenu(){
    let menu = document.getElementById("menu")
    menu.style.display = "block"
    let lateral = document.getElementById("lateral")
    lateral.style.marginLeft ="0"
  }
  cerrarMenu(){
    let menu = document.getElementById("menu")
    menu.style.display = "none"
    console.log(menu.style.display)
  }

}
