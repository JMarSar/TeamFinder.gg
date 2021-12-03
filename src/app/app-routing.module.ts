import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarScrimComponent } from './pages/buscar-scrim/buscar-scrim.component';
import { DetallesTorneoComponent } from './pages/detalles-torneo/detalles-torneo.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LfmComponent } from './pages/lfm/lfm.component';
import { LoginComponent } from './pages/login/login.component';
import { PartidaDetalleComponent } from './pages/partida-detalle/partida-detalle.component';
import { PartidaComponent } from './pages/partida/partida.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RegistroCompletaRegistroComponent } from './pages/registro-completa-registro/registro-completa-registro.component';
import { RegistroFinalComponent } from './pages/registro-final/registro-final.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { VolverComponent } from './pages/volver/volver.component';

const routes: Routes = [
  { path:  '', component: LandingComponent},
  { path:  'buscar-scrim', component:  BuscarScrimComponent},
  { path:  'detalles-torneo', component:  DetallesTorneoComponent},
  { path:  'equipos', component:  EquiposComponent},
  { path:  'footer', component:  FooterComponent},
  { path:  'header', component:  HeaderComponent},
  { path:  'home', component:  HomeComponent},
  { path:  'landing', component:  LandingComponent},
  { path:  'lfm', component:  LfmComponent},
  { path:  'login', component:  LoginComponent},
  { path:  'partida', component:  PartidaComponent},
  { path:  'partida-detalle', component:  PartidaDetalleComponent},
  { path:  'ranking', component:  RankingComponent},
  { path:  'registro', component:  RegistroComponent},
  { path:  'registro-completa-registro', component:  RegistroCompletaRegistroComponent},
  { path:  'registro-final', component:  RegistroFinalComponent},
  { path:  'seleccion-partida', component:  SeleccionPartidaComponent},
  { path:  'side-bar', component:  SideBarComponent},
  { path:  'torneos', component:  TorneosComponent},
  { path:  'volver', component:  VolverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
