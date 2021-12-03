import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
<<<<<<< HEAD
import { DetallesTorneoComponent } from './pages/detalles-torneo/detalles-torneo.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LandingComponent } from './pages/footer/pages/landing/landing.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { NOequipoComponent } from './pages/noequipo/noequipo.component';
import { EquipoCreadoComponent } from './pages/equipo-creado/equipo-creado.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';
import { AdminCreateComponent } from './pages/admin-create/admin-create.component';
=======
import { PartidaComponent } from './pages/partida/partida.component';
import { PartidaDetalleComponent } from './pages/partida-detalle/partida-detalle.component';
import { BuscarScrimComponent } from './pages/buscar-scrim/buscar-scrim.component';
>>>>>>> 991d9ed (Creado front de detalle partidas, seleccion partida, buscando amistosa en proceso)

@NgModule({
  declarations: [
    AppComponent,
    TorneosComponent,
    HomeComponent,
    SeleccionPartidaComponent,
<<<<<<< HEAD
    DetallesTorneoComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    MenuComponent,
    AlertsComponent,
    ChatComponent,
    CrearEquipoComponent,
    RankingComponent,
    NOequipoComponent,
    EquipoCreadoComponent,
    AdminToolsComponent,
    AdminCreateComponent
=======
    PartidaComponent,
    PartidaDetalleComponent,
    BuscarScrimComponent
>>>>>>> 991d9ed (Creado front de detalle partidas, seleccion partida, buscando amistosa en proceso)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
