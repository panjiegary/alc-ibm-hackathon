import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Retailer } from '../../entity/retailer';
import { Constants } from '../../constants';

@Injectable()
export class RetailerService {

  constructor(private http: Http) { }

  getRetailers(): Promise<Retailer[]> {
    return this.http.get(`${Constants.SERVICE_URL}getRetailers`)
      .toPromise()
      .then(response => response.json() as Retailer[])
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }
}
