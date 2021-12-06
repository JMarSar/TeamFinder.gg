import { Component, OnInit } from '@angular/core';
import { Conexiones } from 'src/app/models/conexiones';
import { DiaInfo } from 'src/app/models/dia-info';
import { Estadistica } from 'src/app/models/estadistica';

@Component({
  selector: 'app-info-equipo-personal',
  templateUrl: './info-equipo-personal.component.html',
  styleUrls: ['./info-equipo-personal.component.css']
})
export class InfoEquipoPersonalComponent implements OnInit {

  public dias: DiaInfo[]
  public conexionesTotal: Conexiones[];
  public fechaHoy: Date;
  public mostrarConexiones: boolean;
  public estadistica: Estadistica;
  public porcenGanados: number;
  public admin: boolean;
  public chartType: string = 'doughnut';
   public chartDatasets: Array<any> = [
    { data: [608, 569], label: 'Win Rate' }
  ];

  public chartLabels: Array<any> = ['Wins', 'Loses'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#0B7FEA', '#CE0037'],
      hoverBackgroundColor: ['#389CF9', '#F34171'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { 
    this.conexionesTotal = [
    new Conexiones('http://viaxesports.com/wp-content/uploads/2019/02/Logo.png','Vaevictis Esports'),
    new Conexiones('https://marketing.dcassetcdn.com/blog/2018/July/Powerful-Gaming-Logos/Green-Ram.jpg','Exabyte'),
  ];
    this.dias = [
      new DiaInfo('L',new Date(2021,10,29),false,null),
      new DiaInfo('M',new Date(2021,10,30),false,null),
      new DiaInfo('X',new Date(2021,11,1),false,null),
      new DiaInfo('J',new Date(2021,11,2),false,null),
      new DiaInfo('V',new Date(2021,11,3),false,null),
      new DiaInfo('S',new Date(2021,11,4),true,new Conexiones('https://marketing.dcassetcdn.com/blog/2018/July/Powerful-Gaming-Logos/Green-Ram.jpg','Exabyte')),
      new DiaInfo('D',new Date(2021,11,5),false,null),
    ];
    this.fechaHoy = new Date();
    this.mostrarConexiones = true;
    this.estadistica = new Estadistica(608,569,'EU West',5.1,4.3,4.3);
    this.porcenGanados = (Math.round((this.estadistica.win*100)/(this.estadistica.win+this.estadistica.loses)*10))/10
    this.admin = false;
  }

  ngOnInit() {
    
  }

}
