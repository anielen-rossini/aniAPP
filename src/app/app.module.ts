import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire"
import { AngularFireDatabaseModule } from "@angular/fire/database"



import { ClienteSalvarComponent } from './cliente/cliente-salvar/cliente-salvar.component';
import { EstabelecimentoSalvarComponent } from './estabelecimento/estabelecimento-salvar/estabelecimento-salvar.component';
import { CardapioSalvarComponent } from './cardapio/cardapio-salvar/cardapio-salvar.component';
import { PedidoSalvarComponent } from './pedido/pedido-salvar/pedido-salvar.component';
import { ComponenteAcompanhar } from './pedido/acompanharPedido/component.acompanhar';
import { CardapioListarComponent } from './cardapio/cardapio-listar/cardapio-listar.component';
import { EstabelecimentoListarComponent } from './estabelecimento/estabelecimento-listar/estabelecimento-listar.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';





@NgModule({
  declarations: [AppComponent, ClienteSalvarComponent, EstabelecimentoSalvarComponent,CardapioSalvarComponent, PedidoSalvarComponent, ComponenteAcompanhar, CardapioListarComponent, EstabelecimentoListarComponent, PedidoListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyDU6bjYzqm7e0l6qst1m7Cybr6Au55-FXI",
    authDomain: "aniapp-40f42.firebaseapp.com",
    databaseURL: "https://aniapp-40f42.firebaseio.com",
    projectId: "aniapp-40f42",
    storageBucket: "aniapp-40f42.appspot.com",
    messagingSenderId: "938604848730",
    appId: "1:938604848730:web:59293448156c424f"
  }), AngularFireDatabaseModule,],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
