import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../models/torneo';
import { Partida } from '../../models/partida';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  public torneos:Torneo[]
  public torneo:Torneo;
  public myIndex:number;
  public partida:Partida;

  constructor() { 
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

  mostrarTorneo(i:number){
    this.torneo = this.torneos[i]
    this.myIndex = i
  }

  ngOnInit(): void {
  }

}
