import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistroAdminService } from 'src/app/shared/registro-admin.service';
import { Router } from '@angular/router';
import { HayAdminService } from 'src/app/shared/hay-admin.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {

  public adminCreado:boolean
  constructor(public navegar: Router, private toastr:ToastrService, public ServicioCrearAdmin: RegistroAdminService,
              public ServicioAdmin:HayAdminService) { 
    this.adminCreado = false
    
  }

  ngOnInit(): void {

    this.ServicioAdmin.comprobarAdmin()
    .subscribe((data:any)=>{
      console.log(data.resultado)
      if(data.resultado.length !=0){
        this.adminCreado = true
      }

    })


    // if(this.adminCreado == true){
    //   this.navegar.navigate(["../landing"])
    // }
  }
  acceder(){
    this.navegar.navigate(["../admin-tools"])
  }
  // esperar(){
  //   setTimeout(this.acceder,5000)
  // }

  crearAdmin(mail:string,pass:string){
    this.toastr.success("Serás redirigido a la creación de torneos", "Usuario Manager creado") 
    this.ServicioCrearAdmin.crearAdmin(mail,pass)
    .subscribe((data:any)=>{
      console.log(data)
      setTimeout(()=>{
        this.acceder();
      },2000)
    })
  }

}
