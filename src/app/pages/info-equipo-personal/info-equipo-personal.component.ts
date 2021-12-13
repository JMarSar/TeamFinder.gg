import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'

@Component({
  selector: 'app-info-equipo-personal',
  templateUrl: './info-equipo-personal.component.html',
  styleUrls: ['./info-equipo-personal.component.css']
})
export class InfoEquipoPersonalComponent implements OnInit {

  constructor() {
    Chart.register(...registerables)
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
          data: [340, 507],
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
