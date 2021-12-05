import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPartidaService } from '../../shared/tipo-partida.service';

@Component({
  selector: 'app-seleccion-partida',
  templateUrl: './seleccion-partida.component.html',
  styleUrls: ['./seleccion-partida.component.css']
})
export class SeleccionPartidaComponent implements OnInit {

  constructor( public navigate: Router, public volver: Location,public ServicioTipo: TipoPartidaService) { }


  redireccionar(tipo:boolean){
    console.log(tipo)
    this.ServicioTipo.cambiarTipo(tipo)
    this.navigate.navigate(["../partida"])
    // this.volver.back()
    // this.volver.path()
  }

  ngOnInit(): void {
  }

}
