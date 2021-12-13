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
    this.Serviciolfm.lfm = 0
   }

  ngOnInit(): void {
  }

  cambiarLfm(id:number){
    console.log(id)
    console.log(this.ServicioLogin.lfm)
    if(this.Serviciolfm.lfm ==0){
      this.Serviciolfm.cambiarLfm(id,1)
      .subscribe((data:any) =>{
        console.log(data)
      })
      this.Serviciolfm.lfm = 1
      console.log(this.Serviciolfm.lfm)
    }
    
    else if (this.Serviciolfm.lfm == 1){
      this.Serviciolfm.cambiarLfm(id,0)
      .subscribe((data:any) =>{
        console.log(data)
      })
      this.Serviciolfm.lfm = 0
      console.log(this.Serviciolfm.lfm)
    }
  }
}
