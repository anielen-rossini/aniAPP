import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms' ;


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire"
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { ComponenteClienteCadastrado } from './cliente/clienteCadastrado/component.clienteCadastrado';
import { ClienteSalvarComponent } from './cliente/cliente-salvar/cliente-salvar.component';
import { ComponenteEstabelecimentoCadastrado } from './estabelecimento/estabelecimentoCadastrado/component.estabelecimentoCadastrado';
import { EstabelecimentoSalvarComponent } from './estabelecimento/estabelecimento-salvar/estabelecimento-salvar.component';
import { CardapioSalvarComponent } from './cardapio/cardapio-salvar/cardapio-salvar.component';
import { ComponenteCardapioVizu } from './cardapio/cardapioVizu/component.cardapioVizu';
import { PedidoSalvarComponent } from './pedido/pedido-salvar/pedido-salvar.component';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';


@NgModule({
  declarations: [AppComponent, ComponenteClienteCadastrado, ClienteSalvarComponent, ComponenteEstabelecimentoCadastrado, EstabelecimentoSalvarComponent, CardapioSalvarComponent, ComponenteCardapioVizu, PedidoSalvarComponent, ComponenteAcompanhar ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyDU6bjYzqm7e0l6qst1m7Cybr6Au55-FXI",
    authDomain: "aniapp-40f42.firebaseapp.com",
    databaseURL: "https://aniapp-40f42.firebaseio.com",
    projectId: "aniapp-40f42",
    storageBucket: "aniapp-40f42.appspot.com",
    messagingSenderId: "938604848730",
    appId: "1:938604848730:web:59293448156c424f"
  }), AngularFireDatabaseModule, ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
