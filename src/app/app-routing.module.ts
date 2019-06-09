import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteClienteCadastrado } from './cliente/clienteCadastrado/component.clienteCadastrado';
import { ComponenteClienteCadastro } from './cliente/clienteCadastro/component.clienteCadastro';
import { ComponenteEstabelecimentoCadastrado } from './estabelecimento/estabelecimentoCadastrado/component.estabelecimentoCadastrado';
import { ComponenteEstabelecimentoCadastro } from './estabelecimento/estabelecimentoCadastro/component.estabelecimentoCadastro';
import { ComponenteCardapioCadastro } from './cardapio/cardapioCadastro/component.cardapioCadastro';
import { ComponenteCardapioVizu } from './cardapio/cardapioVizu/component.cardapioVizu';
import { ComponentePedido } from './pedido/clientePedido/component.pedido';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'entrar', component: ComponenteClienteCadastrado },
  { path: 'cliEntrar', component: ComponenteClienteCadastro },
  { path: 'estabEntrar', component: ComponenteEstabelecimentoCadastrado },
  { path: 'estabCad', component: ComponenteEstabelecimentoCadastro },
  { path: 'cardapioCad', component: ComponenteCardapioCadastro },
  { path: 'cardapioVer', component: ComponenteCardapioVizu },
  { path: 'makePedido', component: ComponentePedido },
  { path: 'cope', component: ComponenteAcompanhar },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
