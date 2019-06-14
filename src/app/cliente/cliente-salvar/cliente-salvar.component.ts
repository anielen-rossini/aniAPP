import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidade/cliente';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-cliente-salvar',
  templateUrl: './cliente-salvar.component.html',
  styleUrls: ['./cliente-salvar.component.scss'],
})
export class ClienteSalvarComponent implements OnInit {
  cliente :  Cliente = new Cliente();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('cliente').push(this.cliente);
    this.cliente = new Cliente();
    alert("Cadastrado");
  }
}
