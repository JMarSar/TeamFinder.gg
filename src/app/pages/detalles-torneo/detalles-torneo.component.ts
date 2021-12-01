import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../models/torneo';

@Component({
  selector: 'app-detalles-torneo',
  templateUrl: './detalles-torneo.component.html',
  styleUrls: ['./detalles-torneo.component.css']
})
export class DetallesTorneoComponent implements OnInit {

  public torneos:Torneo[];
  public torneo:Torneo;
  public proximoTorneo:Torneo;

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
      new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2121", false),
    ],
    this.proximoTorneo = new Torneo("PREDATORIANS OF THE TOMB", "3", "10/11/2021", false)
  }

  ngOnInit(): void {
  }

}
