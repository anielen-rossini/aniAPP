import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../entidade/estabelecimento';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-estabelecimento-salvar',
  templateUrl: './estabelecimento-salvar.component.html',
  styleUrls: ['./estabelecimento-salvar.component.scss'],
})
export class EstabelecimentoSalvarComponent implements OnInit {
  estabelecimento : Estabelecimento = new Estabelecimento();
  
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
  
  estabelecimentoS(){
    this.banco.list('estabelecimento').push(this.estabelecimento);
    this.estabelecimento = new Estabelecimento();
    alert("Loja Salva");
  }

}
