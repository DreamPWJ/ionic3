import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

/*  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {

    } else if (password.value.length == 0) {

    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;

    }
  }*/

}
