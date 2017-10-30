import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FacebookService {
  base = 'assets/data/facebook/';
  constructor(private http: Http) { }

  getTimeline() {
    return this.http
      .get(this.base + 'timeline.json')
      .map(res => res.json());
  }
  getAdsHistory() {
    return this.http
      .get(this.base + 'ads_history.json')
      .map(res => res.json());
  }
  getEvents() {
    return this.http
      .get(this.base + 'events.json')
      .map(res => res.json());
  }

  getChangeRequests() {
    return this.http
      .get(this.base + 'changerequests.json')
      .map(res => res.json());
  }

  getLocations() {
    return this.http
      .get(this.base + 'locations.json')
      .map(res => res.json());
  }

  getAccessActivities() {
    return this.http
      .get(this.base + 'accessActivities.json')
      .map(res => res.json());
  }

  getTransferActivities() {
    return this.http
      .get(this.base + 'transferActivities.json')
      .map(res => res.json());
  }

  getContacts() {
    return this.http
      .get(this.base + 'contacts.json')
      .map(res => res.json());
  }
}
