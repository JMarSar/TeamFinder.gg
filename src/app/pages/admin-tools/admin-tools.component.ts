import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  public pass: boolean
  constructor() {
    this.pass = false
   }

  ngOnInit(): void {
  }
  cambiarPass(tipo:boolean){
    console.log(this.pass)
    this.pass = tipo
  }
}
