import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chart} from 'chart.js';
import {ViewChild} from '@angular/core';

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
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,data) {
    data = {
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
         data: [65, 59, 80, 81, 56, 55, 40, 32],
         spanGaps: false,}]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.Canvas1=new Chart(this.Canvas1.nativeElement,{data:this.data,type:'line'});
  }
  
}
