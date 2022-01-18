import { Component, OnInit } from '@angular/core';
import { CogerIdService } from 'src/app/shared/coger-id.service';
import { DatosJuegoService } from 'src/app/shared/datos-juego.service';
import { RegistroService } from '../../shared/registro.service';

@Component({
  selector: 'app-registro-completa-registro',
  templateUrl: './registro-completa-registro.component.html',
  styleUrls: ['./registro-completa-registro.component.css']
})
export class RegistroCompletaRegistroComponent implements OnInit {

  constructor(public ServicioRegistrar: RegistroService, public ServiciocogerID:CogerIdService, public ServicioDatos:DatosJuegoService ) {}

  ngOnInit(): void {
  }

  guardar(fecha:string, idioma:string,info:string,imagen:string){
    console.log("llega")
        this.ServicioRegistrar.user.fecha_nacimiento = fecha
        this.ServicioRegistrar.user.idioma = idioma
        this.ServicioRegistrar.user.info_ad = info
        this.ServicioRegistrar.user.imagen = imagen
      console.log(this.ServicioRegistrar.user)
      this.ServicioRegistrar.guardar()
      .subscribe((data:any) =>{
        console.log(data)
        console.log("llega a guardar")
      })
      this.ServiciocogerID.cogerid(this.ServicioRegistrar.user.nombre)
      .subscribe((data:any)=>{
        console.log(data)
        console.log("llega hasta el final")
        this.ServicioRegistrar.user.id_base = data.resultado[0].id_user
        console.log(this.ServicioRegistrar.user.id_base)
      })
        console.log("hola desde el mas aca")
        this.ServicioDatos.guardarJuego(this.ServicioRegistrar.user.id_base,this.ServicioRegistrar.user.nick)
        .subscribe((data)=>{
          console.log(data)
          console.log("hola desde el mas alla")
        })

    }

}
