/*app.component.ts 根组件 angular里的组件，就是视图，组件的产品就是我们所看见的界面。根组件主要定义了app整体的视觉表现，比如根页面、状态栏、启动界面等等*/
import {Component} from '@angular/core';
import {App, IonicApp, Keyboard, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {AppService} from "./app.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  private nav: NavController;

  constructor(public platform: Platform,  statusBar: StatusBar,  splashScreen: SplashScreen,  private app: App,private ionicApp: IonicApp, public appService:AppService, private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('ios')) {
        statusBar.styleLightContent();
      } else if (platform.is('android')) {
        statusBar.backgroundColorByHexString("#00A0FE");
      }
      splashScreen.hide();
      this.nav = this.app.getActiveNav();
      this.registerBackButtonAction();//注册返回按键事件
    });
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        activePortal.dismiss().catch(() => {
        });
        activePortal.onDidDismiss(() => {
        });
        return;
      }
      return this.nav.canGoBack() ? this.nav.pop() : this.showExit()
    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.appService.toast("再按一次返回退出应用")
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }


}
