import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StationDetailPage } from '../pages/station-detail/station-detail';
import { Stations } from '../providers/stations';
import { Api } from '../providers/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StationDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StationDetailPage
  ],
  providers: [
    Stations,
    Api,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
