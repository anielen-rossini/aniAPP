import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../entidade/cardapio';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cardapio-salvar',
  templateUrl: './cardapio-salvar.component.html',
  styleUrls: ['./cardapio-salvar.component.scss'],
})
export class CardapioSalvarComponent implements OnInit {

  cardapio : Cardapio = new Cardapio();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
  
  cardapioS(){
    this.banco.list('cardapio').push(this.cardapio);
    this.cardapio = new Cardapio();
    alert("Itens Salvos");
  }

}
