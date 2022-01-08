import { Component, OnInit } from '@angular/core';
import { Torneos } from 'src/app/models/torneos';
import { TorneosApuntadoService } from 'src/app/shared/torneos-apuntado.service';
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

  constructor(public apiService : TorneosService, public ServicioApuntados: TorneosApuntadoService) { 
    this.torneos = []
  }



  ngOnInit(): void {
    this.obtenerTorneos()
    this.ServicioApuntados.torneosApuntado()
    .subscribe((data:any) =>{
      console.log( "flag1",  data.resultado)
      for(let i =0; i< this.torneos.length;i++){
        const result = data.resultado.find((element:any) =>{
          return element.clave_torneo === this.torneos[i].clave_torneo
        })
        console.log( "flag2", result)
        if(result){
          this.torneos[i].selected = true
        }
      }
    })

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
  getClass(torneo:Torneos, i:number){
    return torneo.patrocinado === 1 && i==this.myIndex  
      ? 'card-torneo-rojo blanco' 
      : torneo.patrocinado === 1 
        ? 'card-torneo-rojo'
        : torneo.patrocinado === 0 && i == this.myIndex 
          ? 'card-torneo-azul blanco'
          : 'card-torneo-azul'
  }
  

}
