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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
