import { Component, OnInit } from '@angular/core';
import { ToastrService, Toast } from 'ngx-toastr';
import { EquiposService } from 'src/app/shared/equipos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public admin :boolean
  public tieneEquipo :boolean

  constructor( private toastr:ToastrService, public ServicioEquipos:EquiposService, public navegar : Router ) {
    this.tieneEquipo = false
    this.admin = true
    if(this.tieneEquipo == false){
      this.admin = false
    }

    if (this.admin ==true){
      this.tieneEquipo = true}
   }

  ngOnInit(): void {
    this.mostrarEquipos()
  }
  showToastr(mensaje: string, titulo:string){
    this.toastr.success(mensaje, titulo) 
  }

  mostrarEquipos(){
    this.ServicioEquipos.Equipos()
    .subscribe((data:any) =>{
      console.log(data)
      this.ServicioEquipos.listaEquipos = data.resultado

    })
  }
  llevar(index:number){
    console.log(index)
    this.ServicioEquipos.equipoMarcado(index)
    this.navegar.navigate(["../info-equipo-publico"])
  }
}


