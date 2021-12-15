import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: {
    nombre:{
      val:string;
      error:string;
      isValid: () => boolean;
    },
    contrasena: {
      val: string;
      error : string;
      isValid: () => boolean;
    }
  }

  public alerta :string
  constructor( private ServicioLogin:LoginService,public navegar: Router) { 
  
  this.loginForm ={
    nombre:{
      val:"",
      error: "*El nombre es requerido",
      isValid(){
        return (this.val.length>0)
      }
    },
      contrasena:{
        val:"",
        error:"*La contraseña es requerida",
        isValid(){
          return(this.val.length>0)
        }
      }
    }
  }
  
  isValidForm() {
    return (this.loginForm.nombre.isValid()== true && this.loginForm.contrasena.isValid())
  }

  login(nombre:string,pass:string){
    let login = new Login(nombre,pass)
    console.log(login)
    this.ServicioLogin.login(login)
    .subscribe((data:any) =>{
      console.log(data)

      if(data.resultado.length > 0){
        this.ServicioLogin.id = data.resultado[0].id_user
        this.ServicioLogin.nombre = data.resultado[0].nickname
        this.ServicioLogin.password = data.resultado[0].password
        this.ServicioLogin.idioma = data.resultado[0].idioma
        this.ServicioLogin.manager = data.resultado[0].G_manager
        this.ServicioLogin.imagen = data.resultado[0].imagen
        this.ServicioLogin.lfm = data.resultado[0].lfm
        this.ServicioLogin.juego_fav = data.resultado[0].id_juego_fav
        this.ServicioLogin.nombre_equipo = data.resultado[0].nombre_equipo
        this.ServicioLogin.equipo_id = data.resultado[0].equipo_id
        this.ServicioLogin.creador = data.resultado[0].creador

        console.log(data.resultado[0],
          this.ServicioLogin.id, this.ServicioLogin.nombre,this.ServicioLogin.password,this.ServicioLogin.idioma,
          this.ServicioLogin.id,this.ServicioLogin.imagen, this.ServicioLogin.lfm, this.ServicioLogin.juego_fav, this.ServicioLogin.nombre_equipo)
        this.navegar.navigate(["../home"]) 
      }
      else{
        console.log("flag")
        console.log(data.msg)
        this.alerta = data.msg
      }

    })
  }
   
  ngOnInit(): void {
  }
}