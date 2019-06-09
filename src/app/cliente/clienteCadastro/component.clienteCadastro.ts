import { Component } from '@angular/core';
import { Cliente } from '../entidade/cliente';

@Component({
  selector: 'component.clienteCadastro',
  templateUrl: 'component.clienteCadastro.html'
})

export class ComponenteClienteCadastro {
 cliente :  Cliente = new Cliente();

}
