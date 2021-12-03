import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  public tipo : boolean
  public buscando : boolean

  constructor() { 
    this.tipo = true
    this.buscando = true
  }

  ngOnInit(): void {
  }

}
