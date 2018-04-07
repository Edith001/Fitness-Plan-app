import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserInfoPage} from '../pages/user-info/user-info'
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DashboardPage} from '../pages/dashboard/dashboard'
import { HttpModule } from '@angular/http';
import { DataManager } from '../services/dataManager';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserInfoPage,
    SigninPage,
    SignupPage,
    DashboardPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserInfoPage,
    UserInfoPage,
    SigninPage,
    SignupPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataManager,
  ]
})
export class AppModule {}
