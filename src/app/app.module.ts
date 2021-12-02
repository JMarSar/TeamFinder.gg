import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
import { DetallesTorneoComponent } from './pages/detalles-torneo/detalles-torneo.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LandingComponent } from './pages/footer/pages/landing/landing.component';
import { PartidaComponent } from './pages/partida/partida.component';
import { PartidaDetalleComponent } from './pages/partida-detalle/partida-detalle.component';
import { BuscarScrimComponent } from './pages/buscar-scrim/buscar-scrim.component';
import { LfmComponent } from './pages/lfm/lfm.component';
import { VolverComponent } from './pages/volver/volver.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { RankingComponent } from './pages/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneosComponent,
    HomeComponent,
    SeleccionPartidaComponent,
    DetallesTorneoComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PartidaComponent,
    PartidaDetalleComponent,
    BuscarScrimComponent,
    LfmComponent,
    VolverComponent,
    SideBarComponent,
    EquiposComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
