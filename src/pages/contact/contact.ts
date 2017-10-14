import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppService} from "../../app/app.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public appService:AppService) {

  }

  ionViewDidLoad() {
    this.getFilms()
  }


  //获取电影数据
  getFilms() {
    this.appService.httpGet("https://api.douban.com/v2/movie/search", {tag: "抗战", count: 13}, (data) => {
      console.log(data);
    }, true)
  }
}
