
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import {EstrelasService} from './services/estrelas.service';
import {PlanetasService} from './services/planetas.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NasaRoutingModule } from './/nasa-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { EstrelaComponent } from './pages/estrela/estrela.component';
import { PlanetaComponent } from './pages/planeta/planeta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CestrelaComponent } from './pages/cestrela/cestrela.component';
import { CplanetaComponent } from './pages/cplaneta/cplaneta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EstrelaComponent,
    PlanetaComponent,
    CestrelaComponent,
    CplanetaComponent
  ],
  imports: [
    BrowserModule,
    NasaRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [EstrelasService,PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
