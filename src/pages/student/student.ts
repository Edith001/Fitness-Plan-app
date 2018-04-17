import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import {AuthService} from '../../services/auth';
/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  students="";
  name = ""
constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
  const userId = this.auth.getAuthenticatedUser().uid;
  firebase.database().ref('/' + userId).once('value').then((snapshot)=>{
     this.name = snapshot.val().userbasic.fname

  })
  firebase.database().ref('/coaches/'+this.name).once('value').then((snapshot)=>{
    const a = snapshot.val();
    Object.keys(a).map(key=>{this.students=a[key]});
    //console.log(this.coaches);
  })


}
addPlan(item){
  //firebase.database().ref("/coaches/"+item).set(this.name);
}
}
