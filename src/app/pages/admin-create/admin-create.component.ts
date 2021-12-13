import { Component, OnInit } from '@angular/core';
import { Torneos } from 'src/app/models/torneos';
import { TorneosService } from 'src/app/shared/torneos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  public pass: boolean
  public selected : number
  public patrocinado:number;


  constructor(public apiService : TorneosService, public navegar:Router, public toastr:ToastrService) {
    this.patrocinado = 0
    this.pass = false
    this.selected = 1
   }

  ngOnInit(): void {
  }

  cambiarPass(tipo:boolean){
    console.log(this.pass)
    this.pass = tipo
  }
  select(type:number){
    this.selected = type
    }

public patrocinadoChanged(){
    if(this.patrocinado == 0){
      this.patrocinado = 1
    }
    else{
      this.patrocinado = 0
    }
}

  showToast(){
    this.toastr.success("Torneo creado con exito", "")
  }

  anadirTorneo(nombre:string,fechainicio:string,fechafin:string,nEquipos:string,tier:string,clave:string,reglas:string){
    let numEquipos = parseInt(nEquipos)
    console.log(nEquipos)

    this.apiService.anadirTorneo(new Torneos (nombre,fechainicio,fechafin,numEquipos,tier,clave,reglas,this.patrocinado))
    .subscribe((data) => {
      console.log(data)
    }
      )
        this.navegar.navigate(["../admin-tools"])
        
        this.showToast()
    }

}



