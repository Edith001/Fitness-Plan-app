import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info'
import {DashboardPage} from '../dashboard/dashboard'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  addInfo(){
    this.navCtrl.push(UserInfoPage);
  }
  gotoGraph(){
    this.navCtrl.push(DashboardPage);
  }
}
