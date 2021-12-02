import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partida-detalle',
  templateUrl: './partida-detalle.component.html',
  styleUrls: ['./partida-detalle.component.css']
})
export class PartidaDetalleComponent implements OnInit {

  public tipo :boolean
  public jugando : boolean

  constructor() { 
    this.tipo = true
    this.jugando = false
  }

  ngOnInit(): void {
  }

}
