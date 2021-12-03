import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alertMsg = ["mensaje de prueba","1","2","3","4","5"]

  constructor() { }

  ngOnInit(): void {
  }

}
