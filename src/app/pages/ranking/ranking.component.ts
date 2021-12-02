import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public equipos : Equipo[]
  public elegido : boolean
  constructor() {
    this.equipos = [team,team2,team3,team4,team5,team6,team7,team8]
    this.elegido = true
   }

  ngOnInit(): void {
  }
  elegir(){
    if (this.elegido == true){
      this.elegido=false}
      else{this.elegido = true}
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

