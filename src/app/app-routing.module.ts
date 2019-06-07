import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentAreaEquilatero} from './componentes/triangulo-equilatero/component.equilatero';
import {ComponentAreaQuadrado} from './componentes/quadrado/component.quadrado';
import {ComponentAreaIsoceles} from './componentes/triangulo-isoceles/component.isoceles';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'triangulo-equilatero', component: ComponentAreaEquilatero},
  { path: 'quadrado', component: ComponentAreaQuadrado},
  { path: 'triangulo-isoceles', component: ComponentAreaIsoceles}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
