import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ActivitiesService {
  source = 'assets/data/activities/activities.json';
  constructor(private http: Http) { }

  getAllActivities() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }

  getFacebookActivities() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'Facebook'));
  }

  getGoogleActivities() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'Google'));
  }

  getWhatsAppActivities() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.Name === 'WhatsApp'));
  }
}
