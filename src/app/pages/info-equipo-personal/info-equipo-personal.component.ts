import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { EquiposService } from 'src/app/shared/equipos.service';

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

  constructor( public ServicioEquipos:EquiposService) {
    Chart.register(...registerables);
    this.info = this.ServicioEquipos.seleccionado;
    this.partidasTotales = this.info.derrotas + this.info.victorias;
    this.fbR = Math.round(((100 * this.info.first_blood_contador) / this.partidasTotales)*10)/10
    this.frhR = Math.round(((100 * this.info.first_herald_contador) / this.partidasTotales)*10)/10  
    this.ftR = Math.round(((100 * this.info.first_tower_contador) / this.partidasTotales)*10)/10
    this.fnashR = Math.round(((100 * this.info.first_nashor_contador) / this.partidasTotales)*10)/10
  }


  ngOnInit() {
    console.log(this.ServicioEquipos.seleccionado.creador)
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Derrota',
          'Victoria',
        ],
        datasets: [{
          label: 'Win Ratio',
          data: [this.info.derrotas, this.info.victorias],
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
