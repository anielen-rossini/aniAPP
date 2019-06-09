import { Component } from '@angular/core';
import { Estabelecimento } from '../entidade/estabelecimento';


@Component({
  selector: 'component.estabelecimentoCadastro',
  templateUrl: 'component.estabelecimentoCadastro.html'
})

export class ComponenteEstabelecimentoCadastro {
 estabelecimento : Estabelecimento = new Estabelecimento();

}
