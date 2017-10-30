import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GoogleService {
  base = 'assets/data/google';
  constructor(private http: Http) { }

  getContacts() {
    return this.http
      .get(this.base + 'contacts.json')
      .map(res => res.json());
  }
  getSearchRequests() {
    return this.http
      .get(this.base + 'search_requests.json')
      .map(res => res.json());
  }
}
