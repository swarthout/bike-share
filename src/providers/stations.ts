import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Stations {
    url: string = '/bikeshare/stations/stations.json';

    constructor(public http: Http) {
    }

    get() {
        return this.http.get(this.url)
            .map(res => res.json())
            .map(res => res.stationBeanList);
    }
}