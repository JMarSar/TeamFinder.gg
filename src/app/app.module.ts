import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { NOequipoComponent } from './pages/noequipo/noequipo.component';
import { EquipoCreadoComponent } from './pages/equipo-creado/equipo-creado.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlertsComponent,
    ChatComponent,
    CrearEquipoComponent,
    RankingComponent,
    NOequipoComponent,
    EquipoCreadoComponent,
    AdminToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
