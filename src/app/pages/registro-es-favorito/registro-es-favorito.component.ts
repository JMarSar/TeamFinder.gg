import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-es-favorito',
  templateUrl: './registro-es-favorito.component.html',
  styleUrls: ['./registro-es-favorito.component.css']
})
export class RegistroEsFavoritoComponent implements OnInit {
  public zedVar:boolean;
  public pinguVar:boolean;
  public piumVar:boolean
  public hidenZ:boolean
  public hidenP:boolean
  public hidenV:boolean
  public hidenT:boolean
  constructor() { 
    this.zedVar=false;
    this.pinguVar=false;
    this.piumVar=false;
    this.hidenZ=true;
    this.hidenP=true;
    this.hidenV=true;
    this.hidenT=false;
  }
  zedChange(){
    this.zedVar = true;
    this.pinguVar = false;
    this.piumVar =false;
    this.hidenZ =false;
    this.hidenP=true;
    this.hidenV=true;
    this.hidenT=true;
  }
  pinChange(){
    this.pinguVar=true;
    this.zedVar=false;
    this.piumVar=false;
    this.hidenP=false;
    this.hidenV=true;
    this.hidenZ =true;
    this.hidenT=true;
  }
  piumChange(){
    this.pinguVar=false;
    this.zedVar=false;
    this.piumVar=true;
    this.hidenZ=true;
    this.hidenP=true;
    this.hidenV=false;
    this.hidenT=true;
  }
  

  ngOnInit(): void {
  }

}
