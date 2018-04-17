import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoachDtPage} from "../coach-dt/coach-dt";
/**
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach',
  templateUrl: 'coach.html',
})
export class CoachPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachPage');
  }
  coach1detail(){
    this.navCtrl.push(CoachDtPage);
  }
}
