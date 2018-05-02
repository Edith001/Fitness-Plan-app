import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chart} from 'chart.js';
import {ViewChild} from '@angular/core';
import {UserBasicInfo}from '../../services/userBasicInfo.interface';
import {DataManager} from '../../services/dataManager';
import {AuthService} from '../../services/auth';
import {LoadingController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild("Canvas1") Canvas1;
  @ViewChild("Canvas0") Canvas0;
  information:any;
  data:any=[];
  data1:any;
  data0:any;
  userBasicInfo:UserBasicInfo={
        fname:"",
        lname:"",
        gender:"",
        Birthday:new Date(),
        profession:"",
        heightfeet:"0",
        heightinch:"0",
        weight:"0",
        traininghistory:"false",
        professional:"false",
        isCoach:"false"
      };
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private datam:DataManager,private auth:AuthService,
  private loadc : LoadingController,private alertc:AlertController) {
    this.data1 = {
      labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      datasets:[{label:"Weekly @galance",fill:false,lineTension:0.1,backgroundColor:"#C0C0C0",
    borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',
    pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",
         pointBorderWidth: 1,
         pointHoverRadius: 5,
         pointHoverBackgroundColor: "rgba(75,192,192,1)",
         pointHoverBorderColor: "rgba(220,220,220,1)",
         pointHoverBorderWidth: 2,
         pointRadius: 1,
         pointHitRadius: 10,
         data:this.data,
         spanGaps: false,}]
    }
    this.data0={
      labels: ["Accomplished","Remaining"],
     datasets: [
       {
         data: [90,10],
         backgroundColor: ["#A9A9A9", "#C0C0C0"],
         hoverBackgroundColor: ["#FF6384", "#36A2EB"]
       }]
    };
  }

  ionViewDidEnter() {
       const l= this.loadc.create({
          content:"Loading"
        });
       l.present();
    console.log('ionViewDidLoad DashboardPage');
    this.auth.getAuthenticatedUser().getIdToken().then((Token)=>{
        this.datam.DLUserBasicInfo(Token).subscribe((data)=>{
             l.dismiss();
             this.userBasicInfo=this.datam.getUserBasicInof();
             console.log(this.userBasicInfo.fname)
             firebase.database().ref("/plan/" + this.userBasicInfo.fname).once("value").then((snapshot) => {
               console.log("hhhhh")
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
                 let data = [0,0,0,0,0,0,0];
                 let b = this.information;
                 console.log(this.information);
                let lenn = b.length;
                for(var i = 0;i<lenn;i++){
                  console.log("gggg")
                    let b = a[i].children;
                    let len0 = b.length;
                    let count = 0;
                    for(var j = 0;j<len0;j++){
                      console.log(b)
                        let c =[];
                        if(b[j].children){
                         c = b[j].children;
                        }
                        console.log(c)
                        let len1 = c.length;
                        for(var z = 0; z<len1;z++){
                            data[i]=0;
                            if(c[z].accp){
                              data[i]=c[z].accp
                            }
                            console.log(data[i]);
                            count = count+1;
                          }
                      }
                      if(count!=0){
                      data[i]=data[i]/count;
                    }
                  }
                  this.data = data;
                  console.log(this.data)
                  this.Canvas1=new Chart(this.Canvas1.nativeElement,{data:this.data1,type:'line'});
                  this.Canvas0=new Chart(this.Canvas0.nativeElement,{data:this.data0,type:'pie'});
               });
        },(err)=>{
          console.log(err);
          l.dismiss();
          const a = this.alertc.create({
            title:"Server ERROR0",
            message:err.message,
            buttons:["Ok"]
          });
          a.present();
        });
    },(err)=>{
      l.dismiss();
      const a = this.alertc.create({
        title:"Server ERROR1",
        message:err.message,
        buttons:["Ok"]
      });
      a.present();
    });
  }

}
