import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-alter',
  templateUrl: './alter.page.html',
  styleUrls: ['./alter.page.scss'],
})
export class AlterPage implements OnInit {


  addres = "user@example.com";


  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  redef(){
    this.afAuth.auth.sendPasswordResetEmail(this.addres);
    this.router.navigate(['home']);

}
}