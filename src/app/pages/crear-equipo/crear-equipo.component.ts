import { Component, OnInit } from '@angular/core';
import { CrearEquipoService } from 'src/app/shared/crear-equipo.service';
import { LoginService } from '../../shared/login.service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  public equipo:Equipo;
  public id_creador:string;

  public equipoForm: {
    url_imagen:{
      val:string;
      error:string;
      isValid: () => boolean;
    },
    nombre_equipo: {
      val:string;
      error:string;
      isValid: () => boolean;
    },
    acronimo_equipo: {
      val:string;
      error:string;
      isValid: () => boolean;
    }
  }

  public alerta :string
  constructor(private servicioCrearEquipo:CrearEquipoService, private servicioLogin:LoginService) { 

    this.id_creador = servicioLogin.id.toString()

    this.equipoForm = {
      url_imagen: {
        val: "",
        error: "La URL es necesaria",
        isValid() {
          return (this.val.length > 0)
        }
      },
      nombre_equipo: {
        val: "",
        error: "La URL es necesaria",
        isValid() {
          return (this.val.length > 0)
        }
      },
      acronimo_equipo: {
        val: "",
        error: "La URL es necesaria",
        isValid() {
          return (this.val.length > 0)
        }
      },
    }
  }
  isValidForm() {
    return (this.equipoForm.url_imagen.isValid() == true && this.equipoForm.nombre_equipo.isValid() == true && this.equipoForm.acronimo_equipo.isValid() == true)
  }

  crearEquipo(url_imagen:string, nombre_equipo:string, acronimo_equipo:string) {
    let equipo = new Equipo(url_imagen, nombre_equipo, acronimo_equipo, "10", "1")
    this.servicioCrearEquipo.crearEquipo(equipo)

    .subscribe((data:any) => {
      console.log(data)

      if (data.resultado.length > 0) {
        this.servicioCrearEquipo.url_imagen = data.resultado[0].url_imagen
        this.servicioCrearEquipo.nombre_equipo = data.resultado[0].nombre_equipo
        this.servicioCrearEquipo.acronimo_equipo = data.resultado[0].acronimo_equipo
      } else{
        console.log(data.msg)
        this.alerta = data.msg
      }

    })
  }
 
  ngOnInit(): void {
    console.log(this.equipoForm.acronimo_equipo)
    console.log(this.equipoForm.url_imagen)
    console.log(this.equipoForm.nombre_equipo)
    console.log(this.servicioLogin.id.toString())
  }

}
