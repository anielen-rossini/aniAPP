import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../entidade/estabelecimento';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-estabelecimento-listar',
  templateUrl: './estabelecimento-listar.component.html',
  styleUrls: ['./estabelecimento-listar.component.scss'],
})
export class EstabelecimentoListarComponent implements OnInit {
  listaFiltro: Estabelecimento[];
  filtro = {};
  estabelecimentos: any;
  valor: string;
  listaEstabelecimento: Observable<Estabelecimento[]>;


  constructor(private fire: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.listaEstabelecimento = this.fire.list<Estabelecimento>('estabelecimento')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() {
    this.listaEstabelecimento.subscribe(estabelecimento => {
        this.estabelecimentos = estabelecimento;
        this.listaFiltro = _.filter(this.estabelecimentos, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.estabelecimentos, _.conforms(this.filtro));
  }

  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['home']);
  }

}
