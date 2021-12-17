import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/shared/perfil.service';
import { Chart, registerables } from 'node_modules/chart.js'
import { LoginService } from '../../shared/login.service';
import { RankingJugadoresService } from 'src/app/shared/ranking-jugadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-usuario-publico',
  templateUrl: './info-usuario-publico.component.html',
  styleUrls: ['./info-usuario-publico.component.css']
})
export class InfoUsuarioPublicoComponent implements OnInit {
  public info:any;
  public wr:string

  constructor(public perfilServicio:PerfilService, public servicioLogin:LoginService, public ServicioJugador: RankingJugadoresService, public navegar:Router) {
    this.wr = ((this.ServicioJugador.jugador.Victorias/(this.ServicioJugador.jugador.Derrotas + this.ServicioJugador.jugador.Victorias))*100).toFixed(1)
    this.info = this.perfilServicio;
    console.log(this.ServicioJugador.jugador)
    Chart.register(...registerables)
  }


  ngOnInit() {
    console.log(this.wr)
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Derrota',
          'Victoria',
        ],
        datasets: [{
          label: 'Win Ratio',
          data: [this.ServicioJugador.jugador.Derrotas, this.ServicioJugador.jugador.Victorias],
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

  public datos(){
    this.perfilServicio.Perfil()
    .subscribe((data:any)=>{
      console.log(data)
      this.perfilServicio.nickname = data.resultado[0].nickname
    })
  }
}
