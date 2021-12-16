import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/shared/perfil.service';
import { Chart, registerables } from 'node_modules/chart.js'
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-info-usuario-personal',
  templateUrl: './info-usuario-personal.component.html',
  styleUrls: ['./info-usuario-personal.component.css']
})
export class InfoUsuarioPersonalComponent implements OnInit {

  public info:any;

  constructor(public perfilServicio:PerfilService, public servicioLogin:LoginService) {
    this.info = this.perfilServicio;
    console.log()
    Chart.register(...registerables)
  }


  ngOnInit() {
    console.log(this.servicioLogin.imagen)
    console.log(this.servicioLogin.url_imagen)
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Derrota',
          'Victoria',
        ],
        datasets: [{
          label: 'Win Ratio',
          data: [this.servicioLogin.derrotas, this.servicioLogin.victorias],
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


  public datos(){
    this.perfilServicio.Perfil()
    .subscribe((data:any)=>{
      console.log(data)
      this.perfilServicio.nickname = data.resultado[0].nickname
    })
  }
}
