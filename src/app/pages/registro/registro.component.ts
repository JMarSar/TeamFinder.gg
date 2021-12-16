import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../shared/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public regisForm: {
    nombre:{
      val:string;
      error:string;
      isValid: () => boolean;
    },
    contrasena: {
      val: string;
      error : string;
      isValid: () => boolean;
    },
    email:{
      val:string;
      error:string;
      isValid: () => boolean;

    },
    passRep:
    {val:string;
      error:string;
      isValid: () => boolean;}
  }

  constructor( public ServicioRegistrar: RegistroService) {
    this.regisForm ={
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
        },
        email:{
          val:"",
          error:'*El mail es requerido',
          isValid(){
            return(this.val.length>0)
          }
        },
          passRep:{
              val:'',
              error:"*La contraseña es requerida",
              isValid(){
                return(this.val.length>0)
              }
          }

        }
    
    }
    isValidReg() {
      return !(this.regisForm.nombre.isValid()== true && (this.regisForm.contrasena.val == this.regisForm.passRep.val ) && this.regisForm.contrasena.isValid() && this.regisForm.email.isValid())
    }

  ngOnInit(): void {
  }

  guardar(user:string, mail:string,pass:string,){
  console.log("llega")
      this.ServicioRegistrar.user.nombre = user
      this.ServicioRegistrar.user.email = mail
      this.ServicioRegistrar.user.password = pass
    console.log(this.ServicioRegistrar.user)
  }

}
