import { Component, OnInit } from '@angular/core';
import { RegistroAdminService } from 'src/app/shared/registro-admin.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {

  constructor( public ServicioCrearAdmin: RegistroAdminService) { }

  ngOnInit(): void {
  }

  crearAdmin(mail:string,pass:string){
    this.ServicioCrearAdmin.crearAdmin(mail,pass)
    .subscribe((data:any)=>{
      console.log(data)
    })
  }
}
