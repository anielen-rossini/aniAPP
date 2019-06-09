import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms' ;
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponenteClienteCadastrado } from './cliente/clienteCadastrado/component.clienteCadastrado';
import { ComponenteClienteCadastro } from './cliente/clienteCadastro/component.clienteCadastro';
import { ComponenteEstabelecimentoCadastrado } from './estabelecimento/estabelecimentoCadastrado/component.estabelecimentoCadastrado';
import { ComponenteEstabelecimentoCadastro } from './estabelecimento/estabelecimentoCadastro/component.estabelecimentoCadastro';
import { ComponenteCardapioCadastro } from './cardapio/cardapioCadastro/component.cardapioCadastro';
import { ComponenteCardapioVizu } from './cardapio/cardapioVizu/component.cardapioVizu';
import { ComponentePedido } from './pedido/clientePedido/component.pedido';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';


@NgModule({
  declarations: [AppComponent, ComponenteClienteCadastrado, ComponenteClienteCadastro, ComponenteEstabelecimentoCadastrado, ComponenteEstabelecimentoCadastro, ComponenteCardapioCadastro, ComponenteCardapioVizu, ComponentePedido, ComponenteAcompanhar ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
