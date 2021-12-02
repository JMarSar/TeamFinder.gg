import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public abierto : boolean
  constructor() { 
    this.abierto = false
  }

  ngOnInit(): void {
  }
  abrir(){
    if(this.abierto == false){
      this.abierto = true
      let barra = document.getElementById("barraColapsada")!
      let flecha = document.getElementById("flecha")!
      flecha.style.transform = "scaleX(-1)"
      barra.style.marginLeft = "4em"}
    else{
      this.abierto= false
      let barra = document.getElementById("barraColapsada")!
      let flecha = document.getElementById("flecha")!
      flecha.style.transform = "scaleX(1)"
      barra.style.marginLeft = "0%"}
  }
}