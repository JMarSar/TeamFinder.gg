import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-scrim',
  templateUrl: './buscar-scrim.component.html',
  styleUrls: ['./buscar-scrim.component.css']
})
export class BuscarScrimComponent implements OnInit {
  public equipos : Equipo[]
  public seleccionado : boolean
  constructor(public navigate: Router) {
    this.equipos = [team,team2,team3,team4,team5,team6,team7,team8]
    this.seleccionado = false
   }

  ngOnInit(): void {
  }

  seleccionar(){
    if(this.seleccionado ==false){
      this.seleccionado =true}
    else{this.seleccionado =false}
    }
    redireccionarRanked(){
      this.navigate.navigate(["../partida-detalle"])
    }

}

class Equipo {

  public rank: number
  public nombre: string
  public wr:number
  public elo: number
  constructor(rank:number,nombre:string,wr:number,elo:number) {
    this.rank = rank;
    this.nombre = nombre;
    this.wr = wr;
    this.elo = elo
  }
}

let team = new Equipo(223,"Freedom Figthers",76, 24371)
let team1 = new Equipo(223,"Freedom Figthers",76, 24371)
let team2 = new Equipo(223,"Freedom Figthers",76, 24371)
let team3 = new Equipo(223,"Freedom Figthers",76, 24371)
let team4 = new Equipo(223,"Freedom Figthers",76, 24371)
let team5 = new Equipo(223,"Freedom Figthers",76, 24371)
let team6= new Equipo(223,"Freedom Figthers",76, 24371)
let team7 = new Equipo(223,"Freedom Figthers",76, 24371)
let team8 = new Equipo(223,"Freedom Figthers",76, 24371)


