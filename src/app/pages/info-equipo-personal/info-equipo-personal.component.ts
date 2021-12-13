import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { EquiposService } from 'src/app/shared/equipos.service';

@Component({
  selector: 'app-info-equipo-personal',
  templateUrl: './info-equipo-personal.component.html',
  styleUrls: ['./info-equipo-personal.component.css']
})
export class InfoEquipoPersonalComponent implements OnInit {
  public info:any
  constructor( public ServicioEquipos:EquiposService) {
    Chart.register(...registerables)
    this.info = this.ServicioEquipos.seleccionado
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
