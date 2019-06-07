import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 nome : string = "Anielen";





 clicar() : void {
   alert("Professor Eduardo diz: Paguem com seu salário ");
 }
}
