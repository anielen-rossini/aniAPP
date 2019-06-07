//export liberador de acesso
//selector define nome
//template interface quem sera o html
import { Component } from '@angular/core';

@Component({
  selector:'component-par',
  templateUrl: 'component.par.html'

})

export class ComponentPar{
  valor : number = 0;
  par() : void {
  let teste = (Number(this.valor) % 2) ;
  if(teste == 0){
     alert (" é par ");
     }
 else{
     alert ("n é par ");
 }
}
}
