import { Component } from '@angular/core';
import { Cardapio } from '../entidade/cardapio';

@Component({
  selector: 'component.cardapioCadastro',
  templateUrl: 'component.cardapioCadastro.html'
})

export class ComponenteCardapioCadastro {
 cardapio : Cardapio = new Cardapio();

}
