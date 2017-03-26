import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the StationDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-station-detail',
  templateUrl: 'station-detail.html'
})
export class StationDetailPage {
  station: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {

    this.station = {}
  }

  ionViewDidLoad() {
    this.station = this.navParams.get("station")
    console.log(this.station)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
