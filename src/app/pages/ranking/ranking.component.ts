import { Component, OnInit } from '@angular/core';
import { RankingJugadoresService } from 'src/app/shared/ranking-jugadores.service';
import { RankingService } from 'src/app/shared/ranking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public elegido : boolean
  constructor( public ServicioRankJugador:RankingJugadoresService, public ServicioRank:RankingService, public llevar:Router) {
    this.elegido = true
   }

  ngOnInit(): void {
    this.mostrarEquipos()
    this.mostrarJugadores()
  }
  elegir(tipo:boolean){
    this.elegido = tipo
    }
  
  mostrarJugadores(){
    this.ServicioRankJugador.Jugadores()
    .subscribe((data:any) =>{
      console.log(data)
      this.ServicioRankJugador.listaJugadores = data.resultado

    })
  }

  mostrarEquipos(){
    this.ServicioRank.Equipos()
    .subscribe((data:any) =>{
      console.log(data)
      this.ServicioRank.listaEquipos = data.resultado
    })
  }
  mostrarJugador(index:number){
    this.ServicioRankJugador.jugador = this.ServicioRankJugador.listaJugadores[index]
    this.llevar.navigate(["../info-usuario-publico"])
  }

}




