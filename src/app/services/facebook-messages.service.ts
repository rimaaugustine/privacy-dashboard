import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FacebookMessagesService {
  source = 'assets/data/facebook/messages.json';

  constructor(private http: Http) {
  }

  getMessages() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }
}
