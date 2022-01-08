import { Component, OnInit } from '@angular/core';
import { ToastrService, Toast } from 'ngx-toastr';
import { EquiposService } from 'src/app/shared/equipos.service';
import { Router } from '@angular/router';
import { UnirseService } from 'src/app/shared/unirse.service';
import { LoginService } from 'src/app/shared/login.service';
import { BuscarEquipoService } from 'src/app/shared/buscar-equipo.service';
import { ConectarService } from 'src/app/shared/conectar.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public admin :boolean
  public tieneEquipo :boolean
  public vacio :boolean

  constructor( private toastr:ToastrService, public ServicioEquipos:EquiposService, 
              public navegar : Router, public ServicioUnirse:UnirseService, public ServicioLogin:LoginService, public ServicioBuscar : BuscarEquipoService, public ServicioConectar:ConectarService ) {
                this.vacio = false


   }

  ngOnInit(): void {
    console.log(this.ServicioLogin.nombre_equipo)
    if(this.ServicioLogin.nombre_equipo ==undefined){
      this.tieneEquipo = false
    }
    else{
      this.admin = true
    }
    
    this.mostrarEquipos()
    
  }
  showToastr(){
    this.toastr.success('Recibirás una alerta con la respuesta del equipo','Solicitud enviada')
  }

  mostrarEquipos(){
    this.ServicioEquipos.Equipos()
    .subscribe((data:any) =>{
      console.log(data)
      const result = data.resultado.map((element:any)=>{
        return {
          ...element,
          joined: false
        }
      })
      this.ServicioEquipos.listaEquipos = result

    })
  }
  llevar(index:number){
    console.log(index)
    this.ServicioEquipos.equipoMarcado(index)
    this.navegar.navigate(["../info-equipo-publico"])
  }
  unirse(index:number){
    console.log("flag click")
    console.log(index)
    this.ServicioUnirse.unirse(this.ServicioLogin.id.toString(),this.ServicioEquipos.listaEquipos[index].equipo_id.toString())
    .subscribe((data:any) =>{
      console.log(data)
      this.ServicioEquipos.listaEquipos[index].joined = true
    })
    console.log(this.ServicioLogin.id,this.ServicioEquipos.listaEquipos[index].equipo_id)
    this.showToastr()
  }
  conectar(index:number){
    console.log("hola conectar")
    console.log(index)
    console.log(this.ServicioLogin.equipo_id,this.ServicioEquipos.listaEquipos[index].equipo_id)
    this.ServicioConectar.conectar(this.ServicioLogin.equipo_id.toString(),this.ServicioEquipos.listaEquipos[index].equipo_id.toString())
    .subscribe((data:any) =>{
      console.log(data)
    })
    console.log(this.ServicioLogin.equipo_id,this.ServicioEquipos.listaEquipos[index].equipo_id)
    this.showToastr()
  }
  busqueda(nombre:string){
    console.log(nombre)
    this.ServicioBuscar.buscar(nombre)
    .subscribe((data:any) =>{
      console.log(data)
      this.ServicioEquipos.listaEquipos = data.resultado
      if(data.resultado.length ==0){
        this.vacio = true
      }
    })
  }
}


