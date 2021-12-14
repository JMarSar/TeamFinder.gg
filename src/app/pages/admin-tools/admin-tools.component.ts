import { Component, OnInit } from '@angular/core';
import { Torneos } from 'src/app/models/torneos';
import { TorneosService } from 'src/app/shared/torneos.service';


@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  public pass: boolean
  public torneos:Torneos[]
  public torneo:Torneos;
  public myIndex:number;

  constructor(public apiService : TorneosService) {
    this.pass = false
    this.torneos = []
   }

  ngOnInit(): void {
    this.obtenerTorneos()
  }

  cambiarPass(tipo:boolean){
    console.log(this.pass)
    this.pass = tipo
  }

  mostrarTorneo(i:number){
    this.torneo = this.torneos[i]
    this.myIndex = i
  }

  obtenerTorneos(){
      this.apiService.obtenerTorneos().subscribe((data:any) =>{
        console.log(data)
        this.torneos = data.resultado
      })
    }

}