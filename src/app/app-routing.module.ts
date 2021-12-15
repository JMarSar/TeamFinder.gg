import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MenuComponent } from './pages/menu/menu.component';
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
import { AdminCreateComponent } from './pages/admin-create/admin-create.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { EquipoCreadoComponent } from './pages/equipo-creado/equipo-creado.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { NoTeamComponent } from './pages/no-team/no-team.component';
import { TeamCreateComponent } from './pages/team-create/team-create.component';
import { ListaChatsComponent } from './pages/lista-chats/lista-chats.component';
import { CrearAdminComponent } from './pages/crear-admin/crear-admin.component';
import { InfoEquipoPersonalComponent } from './pages/info-equipo-personal/info-equipo-personal.component';
import { InfoEquipoPublicoComponent } from './pages/info-equipo-publico/info-equipo-publico.component';
import { InfoUsuarioPersonalComponent } from './pages/info-usuario-personal/info-usuario-personal.component';
import { InfoUsuarioPublicoComponent } from './pages/info-usuario-publico/info-usuario-publico.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { NormasTorneoComponent } from './pages/normas-torneo/normas-torneo.component';
import { RegistroFavComponent } from './pages/registro-fav/registro-fav.component';


const routes: Routes = [
  { path:  '', component: CrearAdminComponent},
  { path:  'admin-create', component:  AdminCreateComponent},
  { path:  'admin-tools', component:  AdminToolsComponent},
  { path:  'alerts', component:  AlertsComponent},
  { path:  'buscar-scrim', component:  BuscarScrimComponent},
  { path:  'chat', component:  ChatComponent},
  { path:  'detalles-torneo', component:  DetallesTorneoComponent},
  { path:  'equipos', component:  EquiposComponent},
  { path:  'footer', component:  FooterComponent},
  { path:  'header', component:  HeaderComponent},
  { path:  'home', component:  HomeComponent},
  { path:  'landing', component:  LandingComponent},
  { path:  'lfm', component:  LfmComponent},
  { path:  'lista-chats', component:  ListaChatsComponent},
  { path:  'login', component:  LoginComponent},
  { path:  'menu', component:  MenuComponent},
  { path:  'new-team', component:  NewTeamComponent},
  { path:  'no-team', component:  NoTeamComponent},
  { path:  'partida', component:  PartidaComponent},
  { path:  'partida-detalle', component:  PartidaDetalleComponent},
  { path:  'ranking', component:  RankingComponent},
  { path:  'registro', component:  RegistroComponent},
  { path:  'registro-completa-registro', component:  RegistroCompletaRegistroComponent},
  { path:  'registro-final', component:  RegistroFinalComponent},
  { path:  'seleccion-partida', component:  SeleccionPartidaComponent},
  { path:  'side-bar', component:  SideBarComponent},
  { path:  'team-create', component:  TeamCreateComponent},
  { path:  'torneos', component:  TorneosComponent},
  { path:  'volver', component:  VolverComponent},
  { path:  'info-usuario-publico', component:  InfoUsuarioPublicoComponent},
  { path:  'info-usuario-personal', component:  InfoUsuarioPersonalComponent},
  { path:  'info-equipo-publico', component:  InfoEquipoPublicoComponent},
  { path:  'info-equipo-personal', component:  InfoEquipoPersonalComponent},
  { path: 'crear-torneo', component:CreateTournamentComponent},
  { path: 'crear-equipo', component:CrearEquipoComponent},
  { path: 'equipo-creado', component:EquipoCreadoComponent},
  { path: 'normas-torneo', component:NormasTorneoComponent},
  { path: 'registro-fav', component: RegistroFavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
