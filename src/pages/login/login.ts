import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {AppService} from "../../app/app.service";

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
  @ViewChild("navbar") navBar: Navbar;
  public account: any = {user: "", password: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = this.backButtonClick;
    console.log('ionViewDidLoad LoginPage');
  }

  backButtonClick = (e: UIEvent) => {
    // do something
    this.navCtrl.pop();
  }

  login() {
    this.appService.confirm("登录", JSON.stringify(this.account), function () {

    })
    /*    this.appService.toast("登录",function () {
        })*/
  }

}
