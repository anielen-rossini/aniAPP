import { Component } from '@angular/core';

@Component({
  selector:'component-soma',
  templateUrl: 'component.somar.html'

})

export class ComponentSoma{
  v1 : number = 0;
  v2 : number = 0;
  result() : void {
    let total = Number(this.v1) + Number(this.v2);
    alert ("resultado é "+total);
  }

}
