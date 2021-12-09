import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

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
