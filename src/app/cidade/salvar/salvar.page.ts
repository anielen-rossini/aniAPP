import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Cidade } from '../entidade/cidade';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  cidade: Cidade = new Cidade();

  constructor(private fire:AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('cidade').push(this.cidade);
    this.cidade = new Cidade();
    this.rota.navigate(['estabCad']);
  }

}