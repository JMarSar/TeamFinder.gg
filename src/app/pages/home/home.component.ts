import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public abierto : boolean
  constructor() { 
    this.abierto = false
  }

  ngOnInit(): void {
  }
  abrir(){
    if(this.abierto == false){this.abierto = true
      let barra = document.getElementById("barraColapsada")!
      let flecha = document.getElementById("flecha")!
      flecha.style.transform = "scaleX(-1)"
      barra.style.marginLeft = "4em"}
    else{this.abierto= false
      let barra = document.getElementById("barraColapsada")!
      let flecha = document.getElementById("flecha")!
      flecha.style.transform = "scaleX(1)"
      barra.style.marginLeft = "0%"}

  }

}
