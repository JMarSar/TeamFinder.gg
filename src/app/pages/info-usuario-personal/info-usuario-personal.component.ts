import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'

@Component({
  selector: 'app-info-usuario-personal',
  templateUrl: './info-usuario-personal.component.html',
  styleUrls: ['./info-usuario-personal.component.css']
})
export class InfoUsuarioPersonalComponent implements OnInit {

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
          data: [560, 608],
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
