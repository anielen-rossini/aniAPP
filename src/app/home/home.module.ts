import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentPar } from '../componentes/par/component.par';
import { ComponentSoma } from '../componentes/soma/component.soma';
import { ComponentMaior } from '../componentes/maior-menor/component.maior';

import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,ComponentPar,ComponentSoma,ComponentMaior]
})
export class HomePageModule {}
