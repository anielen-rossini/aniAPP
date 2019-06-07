import {Component} from '@angular/core';

@Component({
  selector: 'component-maior',
  templateUrl: 'component.maior.html'
})

export class ComponentMaior{
  n1 : number = 0;
  n2 : number = 0;
  n3 : number = 0;
  maior() : void {
    if( (Number(this.n1) > Number(this.n2) ) && (Number(this.n1) > Number(this.n3))) {
        alert ("o maior é "+this.n1);
    }
    else if ( (Number(this.n2) > Number(this.n1) ) && (Number(this.n2) > Number(this.n3))){
       alert ("o maior é "+this.n2);
    }
    else {
      alert ("o maior é "+this.n3);
    }
  }

  }
