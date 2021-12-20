import { Component, OnInit } from '@angular/core';
import { Torneos } from 'src/app/models/torneos';
import { TorneosService } from 'src/app/shared/torneos.service';
import { Partida } from '../../models/partida';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  public torneos:Torneos[]
  public torneo:Torneos;
  public myIndex:number;
  public partida:Partida;

  constructor(public apiService : TorneosService) { 
    this.torneos = []
  }

  mostrarTorneo(i:number){
    this.torneo = this.torneos[i]
    this.myIndex = i
  }

  ngOnInit(): void {
    this.obtenerTorneos()
  }
  obtenerTorneos(){
    this.apiService.obtenerTorneos().subscribe((data:any) =>{
      console.log(data)
      this.torneos = data.resultado
    })
  }
  

}
