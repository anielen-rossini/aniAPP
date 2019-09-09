import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlterarCardapioPage } from './alterar-cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarCardapioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlterarCardapioPage]
})
export class AlterarCardapioPageModule {}
