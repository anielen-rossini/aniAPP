import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entidade/pedido';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-pedido-salvar',
  templateUrl: './pedido-salvar.component.html',
  styleUrls: ['./pedido-salvar.component.scss'],
})
export class PedidoSalvarComponent implements OnInit {
  pedido : Pedido = new Pedido();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
  
   pedidoS(){
    this.banco.list('pedido').push(this.pedido);
    this.pedido = new Pedido();
    alert("Pedido Recebido");
  }

}
