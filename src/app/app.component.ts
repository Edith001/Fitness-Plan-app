import { Component } from '@angular/core';
import { Platform,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from '../pages/home/home';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;


  constructor(platform: Platform, private authService: AuthService,
    statusBar: StatusBar, splashScreen: SplashScreen) {
      firebase.initializeApp({
        apiKey: "AIzaSyCvF4uhrtr4fK0q8fKfldDth9dr0257x18",
            authDomain: "gymapp-7ab3c.firebaseapp.com"
});
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.isAuthenticated = true;
    this.rootPage = TabsPage;
  } else {
    this.isAuthenticated = false;
    this.rootPage = SigninPage;
  }
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
