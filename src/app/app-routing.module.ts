import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClienteSalvarComponent } from './cliente/cliente-salvar/cliente-salvar.component';

import { EstabelecimentoSalvarComponent } from './estabelecimento/estabelecimento-salvar/estabelecimento-salvar.component';
import { CardapioSalvarComponent } from './cardapio/cardapio-salvar/cardapio-salvar.component';
import { PedidoSalvarComponent } from './pedido/pedido-salvar/pedido-salvar.component';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';
import { CardapioListarComponent } from './cardapio/cardapio-listar/cardapio-listar.component';
import { EstabelecimentoListarComponent } from './estabelecimento/estabelecimento-listar/estabelecimento-listar.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'cliEntrar', component: ClienteSalvarComponent },

  { path: 'estabCad', component: EstabelecimentoSalvarComponent },
  { path: 'cardapioCad', component: CardapioSalvarComponent },

  { path: 'makePedido', component: PedidoSalvarComponent },
  { path: 'cope', component: ComponenteAcompanhar },
  { path: 'cardapiolista', component: CardapioListarComponent },
  { path: 'establista', component: EstabelecimentoListarComponent },
  { path: 'pedidolista', component: PedidoListarComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
