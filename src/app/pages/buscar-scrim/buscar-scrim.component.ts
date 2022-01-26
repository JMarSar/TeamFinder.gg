import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from '../../shared/equipos.service';

@Component({
  selector: 'app-buscar-scrim',
  templateUrl: './buscar-scrim.component.html',
  styleUrls: ['./buscar-scrim.component.css']
})
export class BuscarScrimComponent implements OnInit {
  public equipos : Equipo[]
  public seleccionado : boolean
  constructor(public navigate: Router, public ServicioEquipos:EquiposService) {
    this.seleccionado = false
   }

  ngOnInit(): void {
    this.mostrarEquipos()
  }

  seleccionar(){
    if(this.seleccionado ==false){
      this.seleccionado =true}
    else{this.seleccionado =false}
    }
    redireccionarRanked(){
      this.navigate.navigate(["../partida-detalle"])
    }
    mostrarEquipos(){
      this.ServicioEquipos.Equipos()
      .subscribe((data:any) =>{
        console.log(data)
        const result = data.resultado.map((element:any)=>{
          return {
            ...element,
            joined: false,
            wr: Math.round( element.victorias/(element.victorias+element.derrotas)*100),
            elo: Math.floor(Math.random() * (3000)) + 1000
          }
        })
        this.ServicioEquipos.listaEquipos = result
        this.equipos = this.ServicioEquipos.listaEquipos
  
      })
    }

}

class Equipo {

  public rank: number
  public nombre_equipo: string
  public wr:number
  public elo: number
  
}

// let team = new Equipo(223,"Freedom Figthers",76, 24371)
// let team1 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team2 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team3 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team4 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team5 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team6= new Equipo(223,"Freedom Figthers",76, 24371)
// let team7 = new Equipo(223,"Freedom Figthers",76, 24371)
// let team8 = new Equipo(223,"Freedom Figthers",76, 24371)


