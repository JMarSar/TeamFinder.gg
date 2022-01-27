import { Component, OnInit } from '@angular/core';
import { LfrBuscarService } from 'src/app/shared/lfr-buscar.service';
import { LoginService } from 'src/app/shared/login.service';
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

  constructor(public ServicioTipo : TipoPartidaService, public ServicioBuscar: LfrBuscarService , public ServicioLogin:LoginService) { 
    this.tipo = this.ServicioTipo.obetenerTipo()
    this.cancelar =false
    this.jugando = false
  }

  ngOnInit(): void {
    setTimeout(()=>{

      if(this.cancelar!=true){
      this.jugando = true}
    },8000)

  }
  cambiarCancelar(tipo:boolean){
    this.cancelar = tipo
    this.jugando = false
    this.ServicioBuscar.cancelar = tipo
    this.ServicioBuscar.equipo
    console.log(this.cancelar, this.ServicioBuscar.cancelar)}
  }


