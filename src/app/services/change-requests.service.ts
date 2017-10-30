import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ChangeRequestsService {
  source = 'assets/data/change_requests/change_requests.json';
  constructor(private http: Http) { }

  getAllChangeRequests() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }

  getFacebookChangeRequests() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'Facebook'));
  }

  getGoogleChangeRequests() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'Google'));
  }

  getWhatsAppChangeRequests() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'WhatsApp'));
  }
}
