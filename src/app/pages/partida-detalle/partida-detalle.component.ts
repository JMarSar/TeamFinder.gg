import { Component, OnInit } from '@angular/core';
import { TipoPartidaService } from '../../shared/tipo-partida.service';

@Component({
  selector: 'app-partida-detalle',
  templateUrl: './partida-detalle.component.html',
  styleUrls: ['./partida-detalle.component.css']
})
export class PartidaDetalleComponent implements OnInit {

  public tipo :boolean
  public cancelar : boolean
  public jugando : boolean

  constructor(public ServicioTipo : TipoPartidaService) { 
    this.tipo = this.ServicioTipo.obetenerTipo()
    this.cancelar =false
    this.jugando = false
  }

  ngOnInit(): void {
  }
  cambiarCancelar(tipo:boolean){
    this.cancelar = tipo
    console.log(this.cancelar)}
  }


