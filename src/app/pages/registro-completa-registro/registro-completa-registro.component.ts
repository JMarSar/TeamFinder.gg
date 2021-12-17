import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../shared/registro.service';

@Component({
  selector: 'app-registro-completa-registro',
  templateUrl: './registro-completa-registro.component.html',
  styleUrls: ['./registro-completa-registro.component.css']
})
export class RegistroCompletaRegistroComponent implements OnInit {

  constructor(public ServicioRegistrar: RegistroService ) {}

  ngOnInit(): void {
  }

  guardar(fecha:string, idioma:string,info:string,){
    console.log("llega")
        this.ServicioRegistrar.user.fecha_nacimiento = fecha
        this.ServicioRegistrar.user.idioma = idioma
        this.ServicioRegistrar.user.info_ad = info
      console.log(this.ServicioRegistrar.user)
    }

}
