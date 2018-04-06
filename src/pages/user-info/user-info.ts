import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManager} from '../../services/dataManager';
import { AuthService } from '../../services/auth';
import { AlertController} from 'ionic-angular';
import { LoadingController} from 'ionic-angular';
import { messaging } from 'firebase';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datam:DataManager,private auth:AuthService,private alertc: AlertController,
  private loadc: LoadingController) {
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
    this.datam.putUserBasicInfo({
         fname:this.fname,
         lname:this.lname,
         gender:this.gender,
         Birthday:this.Birthday,
         profession:this.profession,
         heightfeet:this.heightfeet,
         heightinch:this.heightinch,
         weight:this.weight,
         traininghistory:this.traininghistory,
         professional:this.professional,
    });
    const l = this.loadc.create({
      content:"Submitting!"
    })
    l.present();
    this.auth.getAuthenticatedUser().getToken().then((token)=>{
            l.dismiss();
            this.datam.UPUserBasicInfo(token).subscribe(()=>{
              const alert =this.alertc.create({
                title:"Submit Successful!",
                buttons:["Ok"]
              });
              alert.present();
            },(err)=>{
              const alert = this.alertc.create({
                title:"Submission Failure!",
                message:err.message,
                buttons:["Ok"]
              });
              alert.present();
            })
        
    },(err)=>{
      l.dismiss();
     const alert =  this.alertc.create({
       title:"Server ERROR",
       message:err.message,
       buttons:["Ok"]
     });
      alert.present();
    })
  }

}
