import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item:any;
  name:string;
  work:any;
  day:any;
  basic:any;
  Accomplishment:number;
  information:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item=this.navParams.data;
  let s = this.item.name;
  let p = this.item.gname;
  console.log(s)
  console.log(p)
  if(typeof(s)=="string"){
    this.name = s;
  }
  else{
    this.name = p;
  }
  console.log(this.name)
  this.work=this.item.work;
  this.day = this.item.day;
  this.basic = this.item.basic;
  firebase.database().ref("/plan/" + this.name).once("value").then((snapshot) => {
    let a = snapshot.val();
    let len = a.length;
    for (var i = 0; i < len; i++) {
      let b = a[i].children;
      let len0 = b.length;
      for (var j = 0; j < len0; j++) {
        if (b[j].children === "em") {
          b[j].children = [];
        }
      }
    }
    this.information = a;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  update(){
    console.log("hhhhh")
    let a = this.information;
   let len = a.length;
   for(var i = 0;i<len;i++){
     if(a[i].name == this.day.name){
       let b = a[i].children;
       let len0 = b.length;
       console.log(len0)
       for(var j = 0;j<len0;j++){
         if(b[j].name == this.basic.name){
           let c = b[i].children;
           let len1 = c.length;
           for(var z = 0; z<len1;z++){
             if (c[z].name == this.work.name){
               c[z].accp=this.Accomplishment;
               console.log(c[z].accp);
             }
           }
         }
       }
     }
   }
    firebase.database().ref("/plan/" + this.name).set(this.information);


  }
}
