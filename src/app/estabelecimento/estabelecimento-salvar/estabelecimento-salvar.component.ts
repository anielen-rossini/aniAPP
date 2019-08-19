import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../entidade/estabelecimento';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Estab } from 'src/app/logestab/estab';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cidade } from 'src/app/cidade/entidade/cidade';



@Component({
	selector: 'app-estabelecimento-salvar',
	templateUrl: './estabelecimento-salvar.component.html',
	styleUrls: ['./estabelecimento-salvar.component.scss'],
})

export class EstabelecimentoSalvarComponent implements OnInit {
	estabelecimento: Estabelecimento = new Estabelecimento();
	estab: Estab = new Estab();
	listaCidade: Observable<Cidade[]>;

	constructor(private afAuth: AngularFireAuth, private banco: AngularFireDatabase, private rota: Router, ){
		this.listaCidade = this.banco.list<Cidade>('cidade').snapshotChanges().pipe(
		map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() }))));
  
}

ngOnInit() { }

estabelecimentoS() {
	this.banco.list('estabelecimento').push(this.estabelecimento);
	this.estabelecimento = new Estabelecimento();
	this.afAuth.auth.createUserWithEmailAndPassword(this.estab.email, this.estab.senha);
	alert("Loja Salva");

	this.rota.navigate(['cardapioCad']);
}

}
