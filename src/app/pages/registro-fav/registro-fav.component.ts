import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-fav',
  templateUrl: './registro-fav.component.html',
  styleUrls: ['./registro-fav.component.css']
})
export class RegistroFavComponent implements OnInit {

  public zedVar:boolean;
  public pinguVar:boolean;
  public valoVar:boolean
  public hidenZ:boolean
  public hidenP:boolean
  public hidenV:boolean
  public hidenT:boolean
  constructor() { 
    this.zedVar=false;
    this.pinguVar=false;
    this.valoVar=false;
    this.hidenZ=true;
    this.hidenP=true;
    this.hidenV=true;
    this.hidenT=false;
  }
  cambiarFondoZed(){
    this.hidenZ=false;
    if((this.hidenP==false)&&(this.hidenV==false)){
      this.hidenT=true;
    }
  }
  cambiarFondoPingu(){
    this.hidenP=false;
    if((this.hidenZ==false)&&(this.hidenV==false)){
      this.hidenT=true;
  }
}
  cambiarFondoValorant(){
    this.hidenV=false;
    if((this.hidenP==false)&&(this.hidenZ==false)){
      this.hidenT=true;
  }
}
cambiarZed(){
  this.zedVar=true;
  this.pinguVar=false;
  this.valoVar=false;
}
cambiarPingu(){
  this.zedVar=false;
  this.pinguVar=true;
  this.valoVar=false;
}
cambiarValo(){
  this.zedVar=false;
  this.pinguVar=false;
  this.valoVar=true;
}
  ngOnInit(): void {
  }

}
