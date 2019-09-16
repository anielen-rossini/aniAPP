import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cardapio } from '../entidade/cardapio';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alterar-cardapio',
  templateUrl: './alterar-cardapio.page.html',
  styleUrls: ['./alterar-cardapio.page.scss'],
})
export class AlterarCardapioPage implements OnInit {

    listaCard: Observable<Cardapio[]>;


    constructor(private fire: AngularFireDatabase, private modal: ModalController) {
      this.listaCard = this.fire.list<Cardapio>('cardapio')
        .snapshotChanges().pipe(
          map(lista => lista.map(linha => ({
            key: linha.payload.key, ...linha.payload.val()
          })))
        );
    }

  ngOnInit() { }


}
