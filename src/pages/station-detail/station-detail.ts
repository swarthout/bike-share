import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
declare var google;
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
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {

    this.station = {}
  }

  ionViewDidLoad() {
    this.station = this.navParams.get("station")
    console.log(this.station)
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(this.station.latitude, this.station.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
          icon: this.station.icon,
          position: {
            lat: this.station.latitude,
            lng: this.station.longitude
          },
          map: this.map
        })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
