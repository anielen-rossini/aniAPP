import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteClienteCadastrado } from './cliente/clienteCadastrado/component.clienteCadastrado';
import { ClienteSalvarComponent } from './cliente/cliente-salvar/cliente-salvar.component';
import { ComponenteEstabelecimentoCadastrado } from './estabelecimento/estabelecimentoCadastrado/component.estabelecimentoCadastrado';
import { EstabelecimentoSalvarComponent } from './estabelecimento/estabelecimento-salvar/estabelecimento-salvar.component';
import { CardapioSalvarComponent } from './cardapio/cardapio-salvar/cardapio-salvar.component';
import { ComponenteCardapioVizu } from './cardapio/cardapioVizu/component.cardapioVizu';
import { PedidoSalvarComponent } from './pedido/pedido-salvar/pedido-salvar.component';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'entrar', component: ComponenteClienteCadastrado },
  { path: 'cliEntrar', component: ClienteSalvarComponent },
  { path: 'estabEntrar', component: ComponenteEstabelecimentoCadastrado },
  { path: 'estabCad', component: EstabelecimentoSalvarComponent },
  { path: 'cardapioCad', component: CardapioSalvarComponent },
  { path: 'cardapioVer', component: ComponenteCardapioVizu },
  { path: 'makePedido', component: PedidoSalvarComponent },
  { path: 'cope', component: ComponenteAcompanhar },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
