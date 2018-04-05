import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  fname:string;
  lname:string;
  gender:String;
  Birthday:Date;
  profession:string;
  heightfeet:number;
  heightinch:number;
  weight:number;
  traininghistory:boolean;
  professional:boolean;
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }
  upGradeToPremium(){

  }
  submitBasicInfo(){
    
  }

}
