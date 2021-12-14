import { Component, OnInit } from '@angular/core';
import { TipoPartidaService } from '../../shared/tipo-partida.service';
import { Router } from '@angular/router';
import { LfrBuscarService } from 'src/app/shared/lfr-buscar.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  public tipo : boolean
  public buscando : boolean

  constructor(  public navigate: Router, public ServicioTipo : TipoPartidaService, public ServicioBuscar:LfrBuscarService) { 
    this.tipo = this.ServicioTipo.obetenerTipo()
    this.buscando = false
  }

  ngOnInit(): void {
  }
    
  redireccionarAmistosa(){
    this.navigate.navigate(["../buscar-scrim"])
  }
  cancelar(tipo:boolean){
    this.ServicioBuscar.cancelar = tipo
    console.log(this.ServicioBuscar.cancelar)
  }
  buscar(tipo:boolean){
    this.buscando = tipo
    console.log(this.buscando)
    this.ServicioBuscar.buscar()
    .subscribe((data:any) =>{
      this.ServicioBuscar.equipo = data.resultado[0];
      console.log(data.resultado)
      console.log(this.ServicioBuscar.cancelar + " partidacomponente")
      setTimeout(()=>{
        console.log(this.ServicioBuscar.cancelar + " partidacomponente")
        if(this.ServicioBuscar.cancelar != true){
          this.navigate.navigate(["../partida-detalle"])
        }
      },5000)
    })

  }

}
