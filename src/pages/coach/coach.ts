import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoachDtPage} from "../coach-dt/coach-dt";
import firebase from 'firebase'
import {AuthService} from '../../services/auth';
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
    coaches=[];
    name = ""
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
    firebase.database().ref('/coaches').once('value').then((snapshot)=>{
      const a = snapshot.val();
      Object.keys(a).map(key=>{this.coaches.push(key)});
      //console.log(this.coaches);
    })
    const userId = this.auth.getAuthenticatedUser().uid;
    firebase.database().ref('/' + userId).once('value').then((snapshot)=>{
       this.name = snapshot.val().userbasic.fname

    })
  }

  coachdetail(item){
    firebase.database().ref("/coaches/"+item).set(this.name);
  }
}
