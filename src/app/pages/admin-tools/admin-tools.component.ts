import { Component, OnInit } from '@angular/core';
import { Torneo } from '../../models/torneo';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  public pass: boolean
  public torneos:Torneo[]
  public torneo:Torneo;
  constructor() {
    this.pass = false
    this.torneos = [
      // new Torneo("PREDATORIANS OF THE TOMB", "20", "4", false),
      new Torneo("PREDATORIANS OF THE TOMB", "20", "4", false),
      new Torneo("PREDATORIANS OF THE TOMB", "20", "4", true),
      // new Torneo("PREDATORIANS OF THE TOMB", "20", "4", false),
      new Torneo("PREDATORIANS OF THE TOMB", "20", "4", true),
      new Torneo("PREDATORIANS OF THE TOMB", "20", "4", false),
      
    ]
   }

  ngOnInit(): void {
  }
  cambiarPass(tipo:boolean){
    console.log(this.pass)
    this.pass = tipo
  }
}
