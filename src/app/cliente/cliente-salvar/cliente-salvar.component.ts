import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidade/cliente';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Cli } from 'src/app/logcli/cli';




@Component({
  selector: 'app-cliente-salvar',
  templateUrl: './cliente-salvar.component.html',
  styleUrls: ['./cliente-salvar.component.scss'],
})
export class ClienteSalvarComponent implements OnInit {
  cliente: Cliente = new Cliente();
  cli: Cli = new Cli();

  constructor(private afAuth: AngularFireAuth, private banco: AngularFireDatabase, private rota: Router, ){}

  ngOnInit() { }

  salvar() {
    this.banco.list('cliente').push(this.cliente);
    this.cliente = new Cliente();
	this.afAuth.auth.createUserWithEmailAndPassword(this.cli.email, this.cli.senha);
    
    alert("Cadastrado");
	this.rota.navigate(['cardapioCad']);
  }
}
