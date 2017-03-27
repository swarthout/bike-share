import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Stations } from "../../providers/stations";
import { StationDetailPage } from "../station-detail/station-detail";
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public stations: Stations) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(37.7875032, -122.4041896);

    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.loadStations();
  }

  loadStations() {
    let markerIcons = {
      yellow: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      red: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      green: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }

    this.stations.get().subscribe(stations => {
      stations.forEach(station => {
        if (station.availableBikes >= 0 && station.availableBikes < 2) {
          station.icon = markerIcons["red"];
        } else if (station.availableBikes >= 2 && station.availableBikes < 5) {
          station.icon = markerIcons["yellow"];
        } else {
          station.icon = markerIcons["green"];
        }
        let marker = new google.maps.Marker({
          icon: station.icon,
          position: {
            lat: station.latitude,
            lng: station.longitude
          },
          map: this.map
        })
        marker.addListener('click', () => {
          let stationModal = this.modalCtrl.create(StationDetailPage, { "station": station });
          stationModal.present();
        });
      })
    })
  }

}