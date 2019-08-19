import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../entidade/estabelecimento';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-listar',
  templateUrl: './estabelecimento-listar.component.html',
  styleUrls: ['./estabelecimento-listar.component.scss'],
})
export class EstabelecimentoListarComponent implements OnInit {

  listaEstabelecimento: Observable<Estabelecimento[]>;


  constructor(private fire: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.listaEstabelecimento = this.fire.list<Estabelecimento>('estabelecimento')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() { }

  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['home']);
  }

}
