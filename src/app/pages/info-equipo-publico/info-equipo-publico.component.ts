import { Component, OnInit } from '@angular/core';
import { Conexiones } from 'src/app/models/conexiones';
import { DiaInfo } from 'src/app/models/dia-info';
import { Estadistica } from 'src/app/models/estadistica';
import { Chart, registerables } from 'node_modules/chart.js';
import { EquiposService } from '../../shared/equipos.service';

@Component({
  selector: 'app-info-equipo-publico',
  templateUrl: './info-equipo-publico.component.html',
  styleUrls: ['./info-equipo-publico.component.css']
})
export class InfoEquipoPublicoComponent implements OnInit {

  public info:any;
  public partidasTotales:number;
  public fbR:number;
  public frhR:number;
  public ftR:number;
  public fnashR:number;

  constructor( public ServicioEquipos: EquiposService) {
    Chart.register(...registerables);
    this.info = this.ServicioEquipos.seleccionado;
    this.partidasTotales = this.info.derrotas + this.info.victorias;
    this.fbR = Math.round(((this.info.first_blood_contador) / this.partidasTotales)*10)/10
    this.frhR = Math.round(((this.info.first_herald_contador) / this.partidasTotales)*10)/10  
    this.ftR = Math.round(((this.info.first_tower_contador) / this.partidasTotales)*10)/10
    this.fnashR = Math.round(((this.info.first_nashor_contador) / this.partidasTotales)*10)/10
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
    // setTimeout(()=>{

    //   myChart.destroy();
    // },5000)
  }
  
}
