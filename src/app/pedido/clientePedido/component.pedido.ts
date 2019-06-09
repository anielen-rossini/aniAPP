import { Component } from '@angular/core';
import { Pedido } from '../entidade/pedido';

@Component({
  selector: 'component.pedido',
  templateUrl: 'component.pedido.html'
})

export class ComponentePedido {
pedido : Pedido = new Pedido();

}
