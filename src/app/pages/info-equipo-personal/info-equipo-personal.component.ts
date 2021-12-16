import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { EquiposService } from 'src/app/shared/equipos.service';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-info-equipo-personal',
  templateUrl: './info-equipo-personal.component.html',
  styleUrls: ['./info-equipo-personal.component.css']
})
export class InfoEquipoPersonalComponent implements OnInit {
  public info:any;
  public partidasTotales:number;
  public fbR:number;
  public frhR:number;
  public ftR:number;
  public fnashR:number;

  constructor( public ServicioEquipos:EquiposService, public ServicioLogin: LoginService) {
    Chart.register(...registerables);
    this.partidasTotales = this.ServicioLogin.derrotas + this.ServicioLogin.victorias;
    this.fbR = Math.round(((this.ServicioLogin.fbr) / this.partidasTotales)*10)/10
    this.frhR = Math.round(((this.ServicioLogin.frhR) / this.partidasTotales)*10)/10  
    this.ftR = Math.round(((this.ServicioLogin.ftr) / this.partidasTotales)*10)/10
    this.fnashR = Math.round(((this.ServicioLogin.fnashR) / this.partidasTotales)*10)/10
  }


  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Derrota',
          'Victoria',
        ],
        datasets: [{
          label: 'Win Ratio',
          data: [this.ServicioLogin.derrotas, this.ServicioLogin.victorias],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ]
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        rotation: 0
      }
    });
  }

}
