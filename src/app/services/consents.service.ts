import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConsentsService {
  source = 'assets/data/informed_consents/informed_consents.json';
  constructor(private http: Http) { }

  getAllConsents() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }

}
