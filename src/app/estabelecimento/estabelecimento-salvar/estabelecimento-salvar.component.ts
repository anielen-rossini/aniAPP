import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../entidade/estabelecimento';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Estab } from 'src/app/logestab/estab';


@Component({
  selector: 'app-estabelecimento-salvar',
  templateUrl: './estabelecimento-salvar.component.html',
  styleUrls: ['./estabelecimento-salvar.component.scss'],
})
export class EstabelecimentoSalvarComponent implements OnInit {
  estabelecimento: Estabelecimento = new Estabelecimento();
  estab: Estab = new Estab();

  constructor(private afAuth: AngularFireAuth, private banco: AngularFireDatabase, private rota: Router, ){}

  ngOnInit() { }

  estabelecimentoS() {
    this.banco.list('estabelecimento').push(this.estabelecimento);
    this.estabelecimento = new Estabelecimento();
	this.afAuth.auth.createUserWithEmailAndPassword(this.estab.email, this.estab.senha);
    alert("Loja Salva");
	
	this.rota.navigate(['home']);
  }

}
