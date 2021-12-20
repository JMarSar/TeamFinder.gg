import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../models/torneo';
import { Partida } from '../../models/partida';
import { Location } from '@angular/common';

@Component({
  selector: 'app-normas-torneo',
  templateUrl: './normas-torneo.component.html',
  styleUrls: ['./normas-torneo.component.css']
})
export class NormasTorneoComponent implements OnInit {

  public torneos:Torneo[]
  public torneo:Torneo;
  public myIndex:number;
  public partida:Partida;

  constructor(public enrutar: Location) { 
    this.torneos = [
      new Torneo("PREDATORIANS OF THE TOMB", "1", "10/11/2021", true),
      new Torneo("TEST2", "2", "10/11/2021", true),
      new Torneo("PREDATORIANS OF THE GUARD", "3", "10/11/2121", true),
      new Torneo("PREDATORIANS FROM SPAIN", "4", "10/11/2121", true),
      new Torneo("TESTING OF THE TOMB", "1", "10/11/2121", false),
      new Torneo("TESTEO OF THE TOMB", "2", "10/11/2121", false),
      new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2121", false),
      new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2121", false),
      new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2121", false),
      new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2121", false)
    ]
  }

  ngOnInit(): void {
  }

  volver(){
    this.enrutar.back()
  }

}
