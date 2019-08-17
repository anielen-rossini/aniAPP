import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Pedido } from '../entidade/pedido';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.scss'],
})
export class PedidoListarComponent implements OnInit {

  listaPedido: Observable<Pedido[]>;

  constructor(private fire: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router ) {
    this.listaPedido = this.fire.list<Pedido>('pedido')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() { }

  saida() {
    alert("Obrigado por avisar, A saida do produto foi salva");
  }
  
  logout() {
  
    this.afAuth.auth.signOut();
  
    this.router.navigate(['home']);
  }

}
