import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cardapio } from '../entidade/cardapio';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cardapio-listar',
  templateUrl: './cardapio-listar.component.html',
  styleUrls: ['./cardapio-listar.component.scss'],
})
export class CardapioListarComponent implements OnInit {

  listaCardapio : Observable<Cardapio[]>;

  constructor(private fire: AngularFireDatabase) {
   this.listaCardapio = this.fire.list<Cardapio>('cardapio')
   .snapshotChanges().pipe(
     map( lista => lista.map( linha =>({
       key: linha.payload.key, ... linha.payload.val()
     }) ) )
    );
  }

  ngOnInit() {}

}
