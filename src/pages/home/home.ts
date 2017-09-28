import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage: any;
  params: Object;
  constructor(public navCtrl: NavController) {
    this.loginPage = LoginPage;
    this.params = { id: 42 };
  }

}
