import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
import { PartidaComponent } from './pages/partida/partida.component';
import { PartidaDetalleComponent } from './pages/partida-detalle/partida-detalle.component';
import { BuscarScrimComponent } from './pages/buscar-scrim/buscar-scrim.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneosComponent,
    HomeComponent,
    SeleccionPartidaComponent,
    PartidaComponent,
    PartidaDetalleComponent,
    BuscarScrimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
