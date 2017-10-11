import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AppService} from "../../app/app.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public appService: AppService) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logIn(): void {
    this.navCtrl.push('LoginPage');
  }
}
