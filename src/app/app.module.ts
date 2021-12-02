import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
import { DetallesTorneoComponent } from './pages/detalles-torneo/detalles-torneo.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { EquipoPersonalComponent } from './pages/infoPersonal/equipo-personal/equipo-personal.component';
import { UsuarioPersonalComponent } from './pages/infoPersonal/usuario-personal/usuario-personal.component';
import { EquipoPublicoComponent } from './pages/infoPublica/equipo-publico/equipo-publico.component';
import { UsuarioPublicoComponent } from './pages/infoPublica/usuario-publico/usuario-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneosComponent,
    HomeComponent,
    SeleccionPartidaComponent,
    DetallesTorneoComponent,
    HeaderComponent,
    FooterComponent,
    EquipoPersonalComponent,
    UsuarioPersonalComponent,
    EquipoPublicoComponent,
    UsuarioPublicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
