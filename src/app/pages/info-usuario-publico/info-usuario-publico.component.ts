import { Component, OnInit } from '@angular/core';
import { Conexiones } from 'src/app/models/conexiones';
import { DiaInfo } from 'src/app/models/dia-info';
import { Estadistica } from 'src/app/models/estadistica';

@Component({
  selector: 'app-info-usuario-publico',
  templateUrl: './info-usuario-publico.component.html',
  styleUrls: ['./info-usuario-publico.component.css']
})
export class InfoUsuarioPublicoComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
  }
}
