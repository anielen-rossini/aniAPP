import { Component } from '@angular/core';

@Component({
  selector:'component-isoceles',
  templateUrl: 'component.isoceles.html'

})

export class ComponentAreaIsoceles{
  altura: number = 0;
  base: number = 0;
  resultado: string;

  click() : void {
    let area = Number(this.base) * Number(this.altura) / 2 ;
    this.resultado =  'A área é '+area;
  }
  }
