import { Component, OnInit } from '@angular/core';
import { LfmService } from 'src/app/shared/lfm.service';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-lfm',
  templateUrl: './lfm.component.html',
  styleUrls: ['./lfm.component.css']
})
export class LfmComponent implements OnInit {

  constructor(public ServicioLogin:LoginService ,  public Serviciolfm:LfmService) {
    this.Serviciolfm.lfm = false
   }

  ngOnInit(): void {
  }

  cambiarLfm(id:number){
    console.log(id)
    console.log(this.ServicioLogin.lfm)
    if(this.Serviciolfm.lfm ==false){
      this.Serviciolfm.cambiarLfm(id,true)
      .subscribe((data:any) =>{
        console.log(data)
      })
    }
    
    else{
      this.Serviciolfm.cambiarLfm(id,false)
      .subscribe((data:any) =>{
        console.log(data)
      })
    }
  }
}
