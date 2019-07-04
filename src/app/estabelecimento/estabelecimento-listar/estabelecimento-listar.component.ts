import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../entidade/estabelecimento';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-estabelecimento-listar',
  templateUrl: './estabelecimento-listar.component.html',
  styleUrls: ['./estabelecimento-listar.component.scss'],
})
export class EstabelecimentoListarComponent implements OnInit {

  listaEstabelecimento: Observable<Estabelecimento[]>;


  constructor(private fire: AngularFireDatabase) {
    this.listaEstabelecimento = this.fire.list<Estabelecimento>('estabelecimento')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() { }

}
