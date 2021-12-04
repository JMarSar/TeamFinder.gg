import { Component, OnInit } from '@angular/core';

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
  constructor() { 
  
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
   
  ngOnInit(): void {
  }
}