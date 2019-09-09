import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cardapio } from '../entidade/cardapio';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-alterar-cardapio',
  templateUrl: './alterar-cardapio.page.html',
  styleUrls: ['./alterar-cardapio.page.scss'],
})
export class AlterarCardapioPage implements OnInit {

  listaCardapio: Observable<Cardapio[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaCardapio = this.fire.list<Cardapio>('cardapio')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() { }


}
