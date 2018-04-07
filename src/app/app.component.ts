import { Component, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { Platform,NavController, MenuController} from 'ionic-angular';
=======
import { Platform,NavController} from 'ionic-angular';
>>>>>>> 46d9a38fea483c972d39fd7ffda02b10214eb2fd
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { MenuController} from 'ionic-angular'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
<<<<<<< HEAD
  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform, private authService: AuthService,private menuCtrl: MenuController,
    statusBar: StatusBar, splashScreen: SplashScreen) {
=======
  @ViewChild('nav')nav: NavController;

  constructor(platform: Platform, private authService: AuthService,
    statusBar: StatusBar, splashScreen: SplashScreen,private menuController:MenuController) {
>>>>>>> 46d9a38fea483c972d39fd7ffda02b10214eb2fd
      firebase.initializeApp({
        apiKey: "AIzaSyCvF4uhrtr4fK0q8fKfldDth9dr0257x18",
            authDomain: "gymapp-7ab3c.firebaseapp.com"
});
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.isAuthenticated = true;
    this.nav.setRoot(HomePage);
  } else {
    this.isAuthenticated = false;
    this.nav.setRoot(SigninPage);
  }
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
<<<<<<< HEAD
onLoad(page: any) {
  this.nav.setRoot(page);
  this.menuCtrl.close();
}

onLogout() {
  this.authService.logout();
  this.menuCtrl.close();
  this.nav.setRoot(SigninPage);
}
=======

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuController.close();
  }

>>>>>>> 46d9a38fea483c972d39fd7ffda02b10214eb2fd
}


