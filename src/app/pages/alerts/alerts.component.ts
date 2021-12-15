import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/shared/alertas.service';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  public alertMsg = []
  constructor(public ServicioAlertas: AlertasService, public ServicioLogin: LoginService) { }

  ngOnInit(): void {
    this.mostrar()
  }
  cerrar(tipo:boolean){
    this.ServicioAlertas.activar(tipo)
  }
  mostrar(){
    this.ServicioAlertas.mostrarAlertas(this.ServicioLogin.equipo_id.toString())
    .subscribe((data:any)=>{
      console.log(data)
      this.ServicioAlertas.listaAlertas = data.resultado
    })
  }
  aceptar(index:number)
  {
    console.log("el id de la alerta es " + this.ServicioAlertas.listaAlertas[index].id)
    this.ServicioAlertas.listaAlertas.splice(index,1)
    console.log(this.ServicioAlertas.listaAlertas)
    this.ServicioAlertas.borrarAlerta(this.ServicioAlertas.listaAlertas[index].id.toString())
    .subscribe((data:any)=>{
      console.log(data)
    })
    //hay que mandar esta informacion a conexiones del perfil de equipo
    if(    this.ServicioAlertas.listaAlertas[index].equipo_id_sender !=null){
      //enviar la info a la pantalla de conexiones de equipo
    }
    else{
      this.ServicioAlertas.listaAlertas[index].id_user
    }


  }
  rechazar(index:number){
    console.log("el id de la alerta es " + this.ServicioAlertas.listaAlertas[index].id)
    this.ServicioAlertas.listaAlertas.splice(index,1)
    console.log(this.ServicioAlertas.listaAlertas)
    this.ServicioAlertas.borrarAlerta(this.ServicioAlertas.listaAlertas[index].id.toString())
    .subscribe((data:any)=>{
      console.log(data)
    })
  }

}
