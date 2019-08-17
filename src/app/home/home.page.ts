import { Component } from '@angular/core';
import { Cli } from 'src/app/logcli/cli';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Estab } from 'src/app/logestab/estab';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
 cli : Cli = new Cli();
 estab : Estab = new Estab();
 
 constructor(private afAuth: AngularFireAuth, private router: Router) { }
 
 logar(){
	this.afAuth.auth.signInWithEmailAndPassword(this.cli.email, this.cli.senha).then(
	() => { this.router.navigate(['establista']); }
	).catch( (erro) => console.log(alert(erro)) );
}

logarestab(){
	this.afAuth.auth.signInWithEmailAndPassword(this.estab.email, this.estab.senha).then(
	() => { this.router.navigate(['pedidolista']); }
	).catch( (erro) => console.log(alert(erro)) );
}

}
