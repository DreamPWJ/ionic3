/*app.module.ts 根模块文件 ionic是基于angular的，而angular是完全模块化的。根模块文件是个大管家，你把你要用什么（模块、组件、服务、管道、指令等）都告诉它*/
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
//模块装饰器 。@NgModule利用一个元数据对象来告诉Angular如何去编译和运行代码。一个模块内部可以包含组件、指令、管道，并且可以将它们的访问权限声明为公有，以使外部模块的组件可以访问和使用到它们
@NgModule({
  //包装模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  //导入其他模块
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        mode: 'ios', //android 是 md
        tabsHideOnSubPages: 'true',//隐藏全部子页面tabs
        backButtonText: '',
        /*        backButtonIcon: "ios-arrow-back",
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition'*/
      })
  ],
  //设置根组件 通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中
  bootstrap: [IonicApp],
  //不会再模板中被引用到的组件
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  //依赖注入 指定应用程序的根级别需要使用的service
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
//导出组件或者指令等 用来控制将哪些内部成员暴露给外部使用
export class AppModule {
}
