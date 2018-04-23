import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';
import firebase from 'firebase';
import { AuthService } from '../../services/auth';
import { work } from '../../services/work.interface';
import {PopPage} from '../pop';
import {PopoverController} from 'ionic-angular';
 
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {
  information: any[];
  UserId: String;
  name: string;
  gname: string;
  editable: boolean;

  constructor(public navCtrl: NavController, private http: Http, private auth: AuthService,
    private navm: NavParams,private popc:PopoverController) {
    this.gname = this.navm.data;
    console.log(this.navm.data);
    if (typeof (this.gname) === "string") {
      this.editable = true;
      firebase.database().ref("/plan/" + this.gname).once("value").then((snapshot) => {
        let a = snapshot.val();
        let len = a.length;
        for (var i = 0; i < len; i++) {
          let b = a[i].children;
          let len0 = b.length;
          for (var j = 0; j < len0; j++) {
            if (b[j].children === "em") {
              b[j].children = [{
                name: "Cycling",
                information: "blah",
                price: "1h"
              }];
            }
            console.log(b[j]);
          }
        }
        console.log(a);
        this.information = a;
      });
      console.log(this.information)
    } else {
      this.editable = false;
      if (this.auth.getAuthenticatedUser()) {
        this.UserId = this.auth.getAuthenticatedUser().uid;
      }
      firebase.database().ref('/' + this.UserId).once('value').then((snapshot) => {
        this.name = snapshot.val().userbasic.fname
        firebase.database().ref("/plan/" + this.name).once("value").then((snapshot) => {
          let a = snapshot.val();
          let len = a.length;
          for (var i = 0; i < len; i++) {
            let b = a[i].children;
            let len0 = b.length;
            for (var j = 0; j < len0; j++) {
              if (b[j].children === "em") {
                b[j].children = [];
              } else {
              }
              console.log(b[j]);
            }
          }
          console.log(a);
          this.information = a;
        });
        console.log(this.information)
      });
    }
  }

  ionViewDidLoad(){
    this.gname = this.navm.data;
    console.log(this.navm.data);
    if (typeof (this.gname) === "string") {
      firebase.database().ref("/plan/" + this.gname).on("value",(snapshot) => {
        let a = snapshot.val();
        let len = a.length;
        for (var i = 0; i < len; i++) {
          let b = a[i].children;
          let len0 = b.length;
          for (var j = 0; j < len0; j++) {
            if (b[j].children === "em") {
              b[j].children = [{
                name: "Cycling",
                information: "blah",
                price: "1h"
              }];
            }
            console.log(b[j]);
          }
        }
        console.log(a);
        this.information = a;
      });
      console.log(this.information)
    } else {
      if (this.auth.getAuthenticatedUser()) {
        this.UserId = this.auth.getAuthenticatedUser().uid;
      }
      firebase.database().ref('/' + this.UserId).once('value').then((snapshot) => {
        this.name = snapshot.val().userbasic.fname
        firebase.database().ref("/plan/" + this.name).on("value",(snapshot) => {
          let a = snapshot.val();
          let len = a.length;
          for (var i = 0; i < len; i++) {
            let b = a[i].children;
            let len0 = b.length;
            for (var j = 0; j < len0; j++) {
              if (b[j].children === "em") {
                b[j].children = [];
              } else {
              }
              console.log(b[j]);
            }
          }
          console.log(a);
          this.information = a;
        });
        console.log(this.information)
      });
    }
  }
  add(item, child) {
    let exer:work;
    const pop = this.popc.create(PopPage);
    pop.present({ ev: event });
    pop.onDidDismiss(data=>{
     exer=data;
     console.log(exer);
     let a = this.information;
    let len = a.length;
    for(var i = 0;i<len;i++){
      if(a[i].name == item.name){
        let b = a[i].children;
        let len0 = b.length;
        for(var j = 0;j<len0;j++){
          if(b[j].name == child.name){
            b[j].children.push(exer);
          }
        }
      }
    }
    firebase.database().ref("/plan/" + this.gname).set(this.information);
    });
     console.log(item);
     console.log(child);
  }
  delete(item0, child, item) {
    console.log(item0);
    console.log(child);
    console.log(item);
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  gotoDetail(item: any) {
    this.navCtrl.push(DetailPage, item);
  }
}
