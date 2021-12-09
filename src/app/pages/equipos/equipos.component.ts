import { Component, OnInit } from '@angular/core';
import { ToastrService, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public equipos : Equipo[]
  public admin :boolean
  public tieneEquipo :boolean

  constructor( private toastr:ToastrService) {
    this.equipos = [team,team2,team3,team4,team5,team6,team7,team8]
    this.tieneEquipo = false
    this.admin = true
    if(this.tieneEquipo == false){
      this.admin = false
    }

    if (this.admin ==true){
      this.tieneEquipo = true}
   }

  ngOnInit(): void {
  }
  showToastr(mensaje: string, titulo:string){
    this.toastr.success(mensaje, titulo) 
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

