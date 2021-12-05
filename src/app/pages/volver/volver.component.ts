import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-volver',
  templateUrl: './volver.component.html',
  styleUrls: ['./volver.component.css']
})
export class VolverComponent implements OnInit {

  constructor( public navegar: Location ) { }

  ngOnInit(): void {
  }
  volver(){
    this.navegar.back()

  }
}
