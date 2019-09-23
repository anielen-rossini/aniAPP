import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../entidade/cardapio';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-salvar',
  templateUrl: './cardapio-salvar.component.html',
  styleUrls: ['./cardapio-salvar.component.scss'],
})
export class CardapioSalvarComponent implements OnInit {

  cardapio: Cardapio = new Cardapio();

  constructor(private banco: AngularFireDatabase, private modalController: ModalController, private router: Router) { }

  ngOnInit() { }

  cardapioS() {
    if (this.cardapio.key == null) {
      this.banco.list('cardapio').push(this.cardapio);
      this.cardapio = new Cardapio();
      this.router.navigate(['pedidolista']);
    } else {
      this.banco.object('cardapio/' + this.cardapio.key).update(this.cardapio);
      this.modalController.dismiss();
      this.router.navigate(['pedidolista']);
    }

  }

}
