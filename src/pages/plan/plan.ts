import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {
  information: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  gotoDetail(item:any){
    this.navCtrl.push(DetailPage,item);
  }
}
