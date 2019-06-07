import { Component } from '@angular/core';

@Component({
  selector:'component-quadrado',
  templateUrl: 'component.quadrado.html'

})

export class ComponentAreaQuadrado{


    lado: number = 0;
    resultado : string;

    teste() : void {
      let area = Number(this.lado) * Number(this.lado) ;
      this.resultado =  'A área é '+area;
    }
    }
  
