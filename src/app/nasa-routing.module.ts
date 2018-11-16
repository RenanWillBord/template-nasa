import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EstrelaComponent } from './pages/estrela/estrela.component';
import { CestrelaComponent } from './pages/cestrela/cestrela.component';
import { CplanetaComponent } from './pages/cplaneta/cplaneta.component';
import { PlanetaComponent } from './pages/planeta/planeta.component';


const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'estrela', component: EstrelaComponent },
 { path: 'cestrela', component: CestrelaComponent },
 { path: 'cestrela/:id', component: CestrelaComponent },
 { path: 'planeta', component: PlanetaComponent },
 { path: 'cplaneta', component: CplanetaComponent },
 { path: 'cplaneta/:id', component: CplanetaComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class NasaRoutingModule { }
