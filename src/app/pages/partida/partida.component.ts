import { Component, OnInit } from '@angular/core';
import { TipoPartidaService } from '../../shared/tipo-partida.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  public tipo : boolean
  public buscando : boolean

  constructor(  public navigate: Router, public ServicioTipo : TipoPartidaService) { 
    this.tipo = this.ServicioTipo.obetenerTipo()
    this.buscando = false
  }

  ngOnInit(): void {
  }
  redireccionarRanked(){
    this.navigate.navigate(["../partida-detalle"])

  }
  redireccionarAmistosa(){
    this.navigate.navigate(["../buscar-scrim"])
  }
  buscar(){
    if(this.buscando == false){
      this.buscando = true
    }
    else {this.buscando = false}

  }

}
