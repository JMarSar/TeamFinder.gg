import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {path: "menu", component: MenuComponent},
  {path: "alerts", component: AlertsComponent},
  {path: "mensajes", component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
