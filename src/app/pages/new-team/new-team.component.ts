import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  constructor( public navegar:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{

      this.navegar.navigate(["../home"])

    },4000)
  }
  funciion(){
  }

}
