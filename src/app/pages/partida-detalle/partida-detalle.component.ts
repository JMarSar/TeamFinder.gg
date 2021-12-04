import { Component, OnInit } from '@angular/core';
import { TipoPartidaService } from '../../shared/tipo-partida.service';

@Component({
  selector: 'app-partida-detalle',
  templateUrl: './partida-detalle.component.html',
  styleUrls: ['./partida-detalle.component.css']
})
export class PartidaDetalleComponent implements OnInit {

  public tipo :boolean
  public jugando : boolean

  constructor(public ServicioTipo : TipoPartidaService) { 

    this.tipo = this.ServicioTipo.obetenerTipo()
    this.jugando = true
  }

  ngOnInit(): void {
  }

}

